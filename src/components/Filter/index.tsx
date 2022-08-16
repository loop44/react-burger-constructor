import React from "react";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/selectors";
import { setCategory, setSort } from "../../redux/filter/slice";
import { Sort, SortPropertyEnum } from "../../redux/filter/types";
import { useAppDispatch } from "../../redux/store";

import arrowUp from "../../assets/images/icons/arrow-up.svg";
import arrowDown from "../../assets/images/icons/arrow-down.svg";

import styles from "./Filter.module.scss";
import { AnimatePresence, motion } from "framer-motion";

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
	const sortRef = React.useRef<HTMLDivElement>(null);
	const { sort, categoryId } = useSelector(selectFilter);

	const onChangeCategory = React.useCallback((idx: number) => {
		dispatch(setCategory(idx));
	}, []);

	const [open, setOpen] = React.useState(false);

	const onClickListItem = (obj: Sort) => {
		dispatch(setSort(obj));
		setOpen(false);
	};

	return (
		<>
			<div className={styles.categoryBlock}>
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
				<div className={styles.search}>
					<svg
						width="18"
						height="18"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M19 19L13.0001 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
							stroke="black"
							strokeWidth="1"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>

					<input placeholder="Search..." type="text" />
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
