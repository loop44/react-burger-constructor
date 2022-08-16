import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { store, useAppDispatch } from "../../redux/store";

import { setBurger } from "../../redux/burgerConstructor/slice";
import { setIngredients } from "../../redux/ingredients/slice";

import { BurgerShopItem } from "../../redux/burgersShop/types";

import styles from "./BurgerItem.module.scss";
import Modal from "../Modal";
import { useSelector } from "react-redux";
import { selectItems } from "../../redux/burgerConstructor/selectors";
import { setItem } from "../../redux/cart/slice";

type BurgerItemProps = {
	item: BurgerShopItem;
};

const BurgerItem: React.FC<BurgerItemProps> = ({ item }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const burgerlayers = useSelector(selectItems);
	const [visible, setVisible] = React.useState(false);

	const onSettiingsClick = (item: BurgerShopItem) => {
		if (burgerlayers.length > 0) {
			setVisible(true);
		} else {
			dispatch(
				setBurger({
					layers: item.layers,
					commonIngredients: store.getState().ingredients.items,
				})
			);
			dispatch(setIngredients(item.layers));
			navigate("/constructor");
		}
	};

	const onAddToCartClick = (item: BurgerShopItem) => {
		dispatch(
			setItem({
				id: uuid(),
				name: item.title,
				price: item.totalPrice,
			})
		);
	};

	return (
		<div className={styles.item}>
			<div className={styles.image}>
				<div style={{ marginBottom: -100 }}>
					<img src="/layers/bottom-bun.png" alt="bottom-bun" />
				</div>
				<div>
					{item.layers.map((layerData: string, index: number) => {
						const layer = store
							.getState()
							.ingredients.items.find((ingredient) => {
								return ingredient.title === layerData;
							});

						if (!layer) {
							return <></>;
						}
						return (
							<div
								key={index}
								style={{
									height: layer.height,
								}}
							>
								<img
									src={layer.bigImg}
									style={{
										zIndex: item.layers.length - index + 1,
									}}
									alt=""
								/>
							</div>
						);
					})}
				</div>
				<div style={{ height: 95 }}>
					<img
						style={{ zIndex: 10000 }}
						src="/layers/top-bun.png"
						alt="bottom-bun"
					/>
				</div>
			</div>
			<p className={styles.title}>{item.title}</p>
			<div className={styles.priceBlock}>
				<p className={styles.price}>${item.totalPrice.toFixed(2)}</p>
				<div className={styles.buttons}>
					<svg
						onClick={() => onSettiingsClick(item)}
						width="28"
						height="28"
						viewBox="0 0 28 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="14" cy="14" r="14" fill="#F5F5FF" />
						<path
							d="M15.467 11.1336C15.2525 10.9191 15.1452 10.8118 15.105 10.6881C15.0697 10.5793 15.0697 10.4622 15.105 10.3534C15.1452 10.2297 15.2525 10.1224 15.467 9.90793L17.0044 8.37047C16.5964 8.18596 16.1436 8.08325 15.6667 8.08325C13.8717 8.08325 12.4167 9.53833 12.4167 11.3333C12.4167 11.5992 12.4486 11.8577 12.5089 12.1052C12.5734 12.3701 12.6057 12.5026 12.6 12.5863C12.594 12.6739 12.5809 12.7205 12.5405 12.7985C12.5019 12.873 12.428 12.947 12.2801 13.0949L8.89583 16.4791C8.4471 16.9278 8.4471 17.6554 8.89583 18.1041C9.34456 18.5528 10.0721 18.5528 10.5208 18.1041L13.9051 14.7199C14.053 14.572 14.1269 14.498 14.2014 14.4594C14.2794 14.419 14.326 14.4059 14.4136 14.3999C14.4973 14.3942 14.6298 14.4265 14.8947 14.491C15.1422 14.5513 15.4007 14.5833 15.6667 14.5833C17.4616 14.5833 18.9167 13.1282 18.9167 11.3333C18.9167 10.8564 18.8139 10.4035 18.6294 9.99547L17.092 11.5329C16.8775 11.7474 16.7702 11.8547 16.6465 11.8949C16.5378 11.9302 16.4206 11.9302 16.3118 11.8949C16.1881 11.8547 16.0808 11.7474 15.8663 11.5329L15.467 11.1336Z"
							stroke="#5243C2"
							strokeWidth="1.08333"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<svg
						onClick={() => onAddToCartClick(item)}
						width="28"
						height="28"
						viewBox="0 0 28 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="14" cy="14" r="14" fill="#F5F5FF" />
						<path
							d="M10.7917 16.9166H17.1088C17.6629 16.9166 17.94 16.9166 18.1658 16.8165C18.3649 16.7283 18.5353 16.586 18.6578 16.4059C18.7966 16.2017 18.8462 15.9291 18.9453 15.3839L19.7333 11.0501C19.7677 10.8611 19.7848 10.7667 19.7583 10.6929C19.735 10.6282 19.6896 10.5738 19.6301 10.5393C19.5622 10.5 19.4662 10.5 19.2742 10.5H9.91674M8.16666 8.16663H8.93456C9.07613 8.16663 9.14691 8.16663 9.20416 8.19248C9.25462 8.21528 9.29754 8.25196 9.32793 8.29824C9.3624 8.35076 9.37344 8.42067 9.39552 8.56051L11.0211 18.8561C11.0432 18.9959 11.0543 19.0658 11.0887 19.1183C11.1191 19.1646 11.162 19.2013 11.2125 19.2241C11.2697 19.25 11.3405 19.25 11.4821 19.25H18.0833"
							stroke="black"
							strokeWidth="1.16667"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<Modal
					visible={visible}
					title="Warning!"
					resolveHandler={() => {
						dispatch(
							setBurger({
								layers: item.layers,
								commonIngredients: store.getState().ingredients.items,
							})
						);
						dispatch(setIngredients(item.layers));
						navigate("/constructor");
					}}
					rejectHandler={() => {
						setVisible(false);
					}}
				>
					<p>
						You already have a burger in the constructor! If you click OK it
						will be deleted
					</p>
				</Modal>
			</div>
		</div>
	);
};

export default BurgerItem;
