import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import debounce from "lodash.debounce";

import { useAppDispatch } from "../../redux/store";

import { selectFilter } from "../../redux/filter/selectors";

import { setCategory, setSearchValue, setSort } from "../../redux/filter/slice";
import { Sort, SortPropertyEnum } from "../../redux/filter/types";

import arrowUp from "../../assets/images/icons/arrow-up.svg";
import arrowDown from "../../assets/images/icons/arrow-down.svg";
import search from "../../assets/images/icons/search.svg";
import clear from "../../assets/images/icons/clear.svg";

import styles from "./Filter.module.scss";
import Scrollbars from "react-custom-scrollbars-2";

const categories = ["All", "Meat", "Vegan", "Cheezy"];
export const sortList = [
	{ name: "popularity", sortProperty: SortPropertyEnum.RATING_DESC },
	{ name: "popularity", sortProperty: SortPropertyEnum.RATING_ASC },
	{ name: "price", sortProperty: SortPropertyEnum.PRICE_DESC },
	{ name: "price", sortProperty: SortPropertyEnum.PRICE_ASC },
	{ name: "alphabet", sortProperty: SortPropertyEnum.TITLE_DESC },
	{ name: "alphabet", sortProperty: SortPropertyEnum.TITLE_ASC },
];

const Filter: React.FC = () => {
	const dispatch = useAppDispatch();
	const { sort, categoryId } = useSelector(selectFilter);
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState<string>("");
	const inputRef = React.useRef<HTMLInputElement>(null);

	const onChangeCategory = React.useCallback((idx: number) => {
		dispatch(setCategory(idx));
	}, []);

	const onClickListItem = (obj: Sort) => {
		dispatch(setSort(obj));
		setOpen(false);
	};

	const onClickClear = () => {
		dispatch(setSearchValue(""));
		setValue("");
		inputRef.current?.focus();
	};

	const updateSearchValue = React.useCallback(
		debounce((str: string) => {
			dispatch(setSearchValue(str));
		}, 500),
		[]
	);

	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
		updateSearchValue(event.target.value);
	};

	return (
		<>
			<div className={styles.categoryBlock}>
				<Scrollbars autoHeight autoHide>
					<ul>
						{categories.map((categoryName, i: number) => (
							<li
								key={i}
								onClick={() => onChangeCategory(i)}
								className={categoryId === i ? styles.active : ""}
							>
								{categoryName}
							</li>
						))}
					</ul>
				</Scrollbars>
				<div className={styles.search}>
					<img src={search} alt="" />

					<input
						ref={inputRef}
						value={value}
						onChange={onChangeInput}
						placeholder="Search..."
						type="text"
					/>

					{value && (
						<img
							onClick={onClickClear}
							className={styles.clearIcon}
							src={clear}
							alt=""
						/>
					)}
				</div>
			</div>
			<div className={styles.sortBlock}>
				<h1>{categories[categoryId]} burgers</h1>
				<div className={styles.sortBy}>
					<span>Sort by:</span>
					<span className={styles.sort} onClick={() => setOpen(true)}>
						{sort.name}
					</span>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className={open ? styles.active : ""}
					>
						<path
							d="M6 9L12 15L18 9"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				{open && (
					<>
						<div
							className={styles.sortModalOverlay}
							onClick={() => setOpen(false)}
						></div>
						<AnimatePresence>
							<motion.div
								className={styles.sortModal}
								animate={{ opacity: 1 }}
								initial={{ opacity: 0 }}
								exit={{ opacity: 0 }}
								transition={{ type: "spring", duration: 0.4 }}
							>
								<ul>
									{sortList.map((obj, i) => (
										<li
											key={i}
											onClick={() => onClickListItem(obj)}
											className={
												sort.sortProperty === obj.sortProperty
													? styles.active
													: ""
											}
										>
											{obj.name}
											{obj.sortProperty.includes("-") ? (
												<img src={arrowUp} alt="" />
											) : (
												<img src={arrowDown} alt="" />
											)}
										</li>
									))}
								</ul>
							</motion.div>
						</AnimatePresence>
					</>
				)}
			</div>
		</>
	);
};

export default Filter;
