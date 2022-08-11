import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";

import { useNavigate } from "react-router-dom";
import { setBurger } from "../../redux/burgerConstructor/slice";

import { setIngredients } from "../../redux/ingredients/slice";
import { useAppDispatch } from "../../redux/store";

import styles from "./Burgers.module.scss";

const Burgers: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [items, setItems] = useState([]);

	const onSettiingsClick = (item: any) => {
		dispatch(setBurger(item));
		dispatch(setIngredients(item.ingredients));
		navigate("/constructor");
	};

	useEffect(() => {
		fetch("https://62f26124b1098f1508119301.mockapi.io/burgers")
			.then((response) => response.json())
			.then((data) => setItems(data));
	}, []);

	return (
		<div className={styles.burgers}>
			<div className={styles.categoryBlock}>
				<ul>
					<li className={styles.active}>All</li>
					<li>Meat</li>
					<li>Vegan</li>
					<li>Cheezy</li>
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
				<h1>All burgers</h1>
				<div className={styles.sortBy}>
					<span>Sort by:</span>
					<span className={styles.sort}>alphabet</span>
					<svg
						width="24"
						height="24"
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
				</div>
			</div>
			<Scrollbars style={{ height: "100%" }} autoHide>
				<div className={styles.items}>
					{items.map((item: any) => (
						<div key={item.id} className={styles.item}>
							<div className={styles.image}>
								<div style={{ marginBottom: -100 }}>
									<img src="/layers/bottom-bun.png" alt="bottom-bun" />
								</div>
								<div>
									{item.layers.map((layer: any, index: number) => {
										return (
											<div
												key={layer.id}
												style={{
													height: layer.height,
												}}
											>
												<img
													src={layer.img}
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
							</div>
						</div>
					))}
				</div>
			</Scrollbars>
		</div>
	);
};

export default Burgers;
