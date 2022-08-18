import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { v4 as uuid } from "uuid";

import { RootState, useAppDispatch } from "../../redux/store";
import { setItem } from "../../redux/cart/slice";
import { removeAll } from "../../redux/burgerConstructor/slice";
import { removeAllIngredients } from "../../redux/ingredients/slice";

import timeIcon from "../../assets/images/icons/time.svg";
import weightIcon from "../../assets/images/icons/weight.svg";
import kcalIcon from "../../assets/images/icons/kcal.svg";

import styles from "./Summary.module.scss";

import Modal from "../Modal";

const Summary: React.FC = () => {
	const dispatch = useAppDispatch();
	const [visible, setVisible] = React.useState(false);
	const [mobileBarActive, setMobileBarActive] = React.useState(false);
	const [burgerName, setBurgerName] = React.useState("");
	const [value, setValue] = React.useState("");
	const { price, time, oz, kcal } = useSelector(
		(state: RootState) => state.burgerConstructor
	);

	const onClickAddToCart = () => {
		setVisible(true);
	};

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length < 20) {
			setValue(e.target.value);
			setBurgerName(e.target.value);
		}
	};

	const onClickOK = () => {
		dispatch(
			setItem({
				id: uuid(),
				name: burgerName,
				price: price,
			})
		);
		dispatch(removeAll());
		dispatch(removeAllIngredients());
		setVisible(false);
	};

	return (
		<>
			<div
				className={`${styles.summary} ${mobileBarActive ? styles.active : ""}`}
			>
				<div>
					<svg
						onClick={() => setMobileBarActive(!mobileBarActive)}
						className={styles.summaryMobileBtn}
						width="44"
						height="44"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6 9L12 15L18 9"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<h2 className={styles.summaryTitle}>Summary</h2>
					<div className={styles.summaryOrder}>
						<span>${price.toFixed(2)}</span>
						<button onClick={onClickAddToCart}>Add to cart</button>
					</div>
					<p className={styles.summaryText}>
						Build a <span>$10</span> Burger and Get a Gift
					</p>
					<div className={styles.summaryInfo}>
						<div>
							<img src={timeIcon} alt="time" />
							<p>{time.toFixed(1)} min</p>
						</div>
						<div>
							<img src={weightIcon} alt="weight" />
							<p>{oz.toFixed(1)} oz</p>
						</div>
						<div>
							<img src={kcalIcon} alt="kcal" />
							<p>{kcal.toFixed(1)} kcal</p>
						</div>
					</div>
					<AnimatePresence>
						{price >= 10 ? (
							<motion.h3
								className={styles.ketchup}
								animate={{ opacity: 1 }}
								initial={{ opacity: 0 }}
								exit={{ opacity: 0 }}
							>
								+ Free Tomato Ketchup 🎁
							</motion.h3>
						) : null}
					</AnimatePresence>
				</div>
			</div>
			<Modal
				visible={visible}
				title="Add burger to cart"
				rejectHandler={() => {
					setVisible(false);
				}}
				resolveHandler={burgerName && price ? onClickOK : null}
			>
				<p>Enter burger name. It will be shown in cart page</p>
				<input
					className={styles.input}
					onChange={onChangeInput}
					value={value}
					type="text"
					placeholder="Burger name"
				/>
			</Modal>
		</>
	);
};

export default Summary;
