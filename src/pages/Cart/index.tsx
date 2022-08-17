import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../redux/store";

import { selectCartData } from "../../redux/cart/selectors";
import { deleteItem, removeAllItems } from "../../redux/cart/slice";

import { CartItem } from "../../redux/cart/types";

import styles from "./Cart.module.scss";
import Modal from "../../components/Modal";

const Cart: React.FC = () => {
	const [visible, setVisible] = React.useState(false);
	const dispatch = useAppDispatch();
	const cartItemsData = useSelector(selectCartData);

	const onClickRemove = (item: CartItem) => {
		dispatch(deleteItem(item));
	};

	const onClickRemoveAll = () => {
		dispatch(removeAllItems());
	};

	const onClickOrder = () => {
		if (cartItemsData.totalPrice > 0) {
			setVisible(true);
		}
	};

	return (
		<div className={styles.cart}>
			<div className={styles.header}>
				<h1>Cart</h1>
				<div className={styles.remove} onClick={onClickRemoveAll}>
					<svg
						width="20"
						height="22"
						viewBox="0 0 20 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M14 5V4.2C14 3.0799 14 2.51984 13.782 2.09202C13.5903 1.71569 13.2843 1.40973 12.908 1.21799C12.4802 1 11.9201 1 10.8 1H9.2C8.07989 1 7.51984 1 7.09202 1.21799C6.71569 1.40973 6.40973 1.71569 6.21799 2.09202C6 2.51984 6 3.0799 6 4.2V5M8 10.5V15.5M12 10.5V15.5M1 5H19M17 5V16.2C17 17.8802 17 18.7202 16.673 19.362C16.3854 19.9265 15.9265 20.3854 15.362 20.673C14.7202 21 13.8802 21 12.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V5"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<span>Remove all</span>
				</div>
			</div>
			<Scrollbars style={{ height: "100%" }} autoHide>
				{cartItemsData.items.map((item) => {
					return (
						<div className={styles.cartItem} key={item.id}>
							<h2>{item.name}</h2>
							<div className={styles.rightBlock}>
								<p className={styles.price}>${item.price}</p>
								<svg
									onClick={() => onClickRemove(item)}
									width="28"
									height="28"
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
					);
				})}
			</Scrollbars>

			<div className={styles.footer}>
				<div className={styles.total}>
					<p>
						Total count: <span>{cartItemsData.totalCount}</span>
					</p>
					<p>
						Total price: <span>${cartItemsData.totalPrice}</span>
					</p>
				</div>
				<div className={styles.buttonBlock}>
					<button onClick={onClickOrder}>Order now</button>
				</div>
			</div>
			<Modal
				title="Bon appetit!"
				visible={visible}
				rejectHandler={() => setVisible(false)}
				resolveHandler={() => setVisible(false)}
			>
				<p>Burgers ordered successfully</p>
			</Modal>
		</div>
	);
};

export default Cart;
