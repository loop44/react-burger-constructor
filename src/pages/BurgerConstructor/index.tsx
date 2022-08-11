import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

import {
	selectChangeMode,
	selectItems,
	selectTotalPrice,
	selectZoomValue,
} from "../../redux/burgerConstructor/selectors";

import ChangeModeLayers from "../../components/Layers/ChangeModeLayers";
import NormalLayers from "../../components/Layers/NormalLayers";
import Toolbar from "../../components/Toolbar";
import Summary from "../../components/Summary";

import styles from "./BurgerConstructor.module.scss";

import ketchup from "../../assets/images/ketchup.png";

const zoomSizes = [
	{ scale: 0.4, y: 325 },
	{ scale: 0.5, y: 215 },
	{ scale: 0.6, y: 145 },
	{ scale: 0.7, y: 95 },
	{ scale: 0.8, y: 55 },
	{ scale: 0.9, y: 25 },
	{ scale: 1, y: 0 },
];

const BurgerConstructor: React.FC = () => {
	const initialItems = useSelector(selectItems);
	console.log(initialItems);

	const changeMode = useSelector(selectChangeMode);
	const totalPrice = useSelector(selectTotalPrice);
	const zoom = useSelector(selectZoomValue);
	const scale = zoomSizes[zoom].scale;
	const translateY = zoomSizes[zoom].y;

	function createTopBun() {
		if (changeMode) {
			return (
				<motion.div
					animate={{ height: 134 }}
					initial={{ height: 95 }}
					style={{ zIndex: 10000 }}
				>
					<img src="/layers/top-bun.png" alt="top-bun" />
				</motion.div>
			);
		} else {
			return (
				<motion.div animate={{ height: 95 }} initial={{ height: 134 }}>
					<img
						src="/layers/top-bun.png"
						alt="top-bun"
						style={{ zIndex: 10000 }}
					/>
				</motion.div>
			);
		}
	}

	return (
		<div
			className={`${styles.constructor} ${
				changeMode ? "" : `${styles.active}`
			}`}
		>
			<div className={styles.constructorInner}>
				<h1>Make Your Burger</h1>
				<div
					className={styles.constructorBurger}
					style={{ transform: `scale(${scale}) translateY(${translateY}px)` }}
				>
					<div className={styles.bottomBun}>
						<AnimatePresence>
							{totalPrice >= 10 ? (
								<motion.img
									animate={{ opacity: 1 }}
									initial={{ opacity: 0 }}
									exit={{ opacity: 0 }}
									className={styles.ketchup}
									src={ketchup}
									alt=""
								/>
							) : null}
						</AnimatePresence>
						<img src="/layers/bottom-bun.png" alt="bottom-bun" />
					</div>

					{changeMode ? (
						<ChangeModeLayers />
					) : (
						<div>
							<NormalLayers initialItems={initialItems} />
						</div>
					)}

					{createTopBun()}
				</div>
				<Summary />
			</div>
			<Toolbar />
		</div>
	);
};

export default BurgerConstructor;
