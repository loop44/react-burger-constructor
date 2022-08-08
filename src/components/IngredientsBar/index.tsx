import { useSelector } from "react-redux";

import { useAppDispatch } from "../../redux/store";
import { plusItem } from "../../redux/burgerConstructor/slice";
import { minusItem } from "../../redux/burgerConstructor/slice";
import { selectChangeMode } from "../../redux/burgerConstructor/selectors";

import styles from "./IngredientsBar.module.scss";

import { IngredientItem } from "../../redux/ingredients/types";
import { selectIngredients } from "../../redux/ingredients/selectors";
import { decrementItem, incrementItem } from "../../redux/ingredients/slice";

const IngredientsBar = () => {
	const dispatch = useAppDispatch();
	const changeMode = useSelector(selectChangeMode);
	const items = useSelector(selectIngredients);

	const onPlusItemClick = (item: IngredientItem) => {
		if (item.count < 5) {
			dispatch(
				plusItem({
					id: Math.floor(Math.random() * 10000),
					title: item.title,
					img: item.bigImg,
					height: item.height,
					normalHeight: item.normalHeight,
				})
			);
			dispatch(incrementItem(item.id));
		}
	};

	const onMinusItemClick = (item: IngredientItem) => {
		if (item.count > 0) {
			dispatch(minusItem(item.title));
			dispatch(decrementItem(item.id));
		}
	};

	return (
		<div
			className={`${styles.ingredientBar} ${
				changeMode ? "" : `${styles.visible}`
			}`}
		>
			<div className={styles.ingredientBarInner}>
				{items.map((item) => (
					<div className={styles.inrgedientItem} key={item.id}>
						<img
							width={104}
							height={59}
							src={item.littleImg}
							alt={item.title}
						/>
						<p>{item.title}</p>
						<div>
							<svg
								className={item.count === 0 ? styles.disabled : ""}
								width="28"
								height="28"
								onClick={() => onMinusItemClick(item)}
								viewBox="0 0 28 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="14" cy="14" r="14" fill="#D9D9D9" />
								<path
									d="M9 14H19"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="square"
									strokeLinejoin="round"
								/>
							</svg>

							<span>{item.count}</span>

							<svg
								className={item.count === 5 ? styles.disabled : ""}
								width="28"
								height="28"
								onClick={() => onPlusItemClick(item)}
								viewBox="0 0 28 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="14" cy="14" r="14" fill="#D9D9D9" />
								<path
									d="M14 9V19M9 14H19"
									stroke="black"
									strokeWidth="1.5"
									strokeLinecap="square"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default IngredientsBar;
