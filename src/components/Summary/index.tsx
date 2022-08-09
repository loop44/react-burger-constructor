import React from "react";

import { RootState } from "../../redux/store";

import timeIcon from "../../assets/images/icons/time.svg";
import weightIcon from "../../assets/images/icons/weight.svg";
import kcalIcon from "../../assets/images/icons/kcal.svg";

import styles from "./Summary.module.scss";
import { useSelector } from "react-redux";

const Summary: React.FC = () => {
	const { price, time, oz, kcal } = useSelector(
		(state: RootState) => state.burgerConstructor
	);

	return (
		<div className={styles.summary}>
			<div>
				<h2 className={styles.summaryTitle}>Summary</h2>
				<div className={styles.summaryOrder}>
					<span>${price.toFixed(2)}</span>
					<a href="#">Checkout</a>
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
			</div>
		</div>
	);
};

export default Summary;
