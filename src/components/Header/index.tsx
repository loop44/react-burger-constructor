import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

import { selectChangeMode } from "../../redux/burgerConstructor/selectors";
import { selectCartData } from "../../redux/cart/selectors";

import styles from "./Header.module.scss";

import Logo from "../../assets/images/logo.svg";
import MobileMenuIcon from "../../assets/images/icons/mobileMenu.svg";

const Header: React.FC = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
	const changeMode = useSelector(selectChangeMode);
	const location = useLocation();
	const { totalCount, totalPrice } = useSelector(selectCartData);

	return (
		<header
			className={`${styles.header} ${changeMode ? "" : `${styles.visible}`}`}
		>
			<div className={styles.headerWrapper}>
				<div className={styles.headerLeft}>
					<img src={Logo} alt="logo" />
					<nav>
						<ul>
							<li>
								<NavLink
									to="/"
									className={({ isActive }) =>
										isActive
											? `${styles.navItem} ${styles.active}`
											: styles.navItem
									}
								>
									Discover
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/constructor"
									className={({ isActive }) =>
										isActive
											? `${styles.navItem} ${styles.active}`
											: styles.navItem
									}
								>
									Constructor
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/burgers"
									className={({ isActive }) =>
										isActive
											? `${styles.navItem} ${styles.active}`
											: styles.navItem
									}
								>
									Burgers
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>

				<div className={styles.headerRight}>
					{location.pathname !== "/cart" ? (
						<NavLink className={styles.cart} to="/cart">
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6.50014 17H17.3294C18.2793 17 18.7543 17 19.1414 16.8284C19.4827 16.6771 19.7748 16.4333 19.9847 16.1246C20.2228 15.7744 20.3078 15.3071 20.4777 14.3724L21.8285 6.94311C21.8874 6.61918 21.9169 6.45721 21.8714 6.33074C21.8315 6.21979 21.7536 6.12651 21.6516 6.06739C21.5353 6 21.3707 6 21.0414 6H5.00014M2 2H3.3164C3.55909 2 3.68044 2 3.77858 2.04433C3.86507 2.0834 3.93867 2.14628 3.99075 2.22563C4.04984 2.31565 4.06876 2.43551 4.10662 2.67523L6.89338 20.3248C6.93124 20.5645 6.95016 20.6843 7.00925 20.7744C7.06133 20.8537 7.13493 20.9166 7.22142 20.9557C7.31956 21 7.44091 21 7.6836 21H19"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<span>{totalCount}</span>
							<span>|</span>
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6 16C6 18.2091 7.79086 20 10 20H14C16.2091 20 18 18.2091 18 16C18 13.7909 16.2091 12 14 12H10C7.79086 12 6 10.2091 6 8C6 5.79086 7.79086 4 10 4H14C16.2091 4 18 5.79086 18 8M12 2V22"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>

							<span>{totalPrice}</span>
						</NavLink>
					) : null}

					<img
						className={styles.mobileBtn}
						src={MobileMenuIcon}
						onClick={() => setMobileMenuOpen(true)}
						alt=""
					/>

					<div
						className={
							mobileMenuOpen
								? `${styles.mobileMenu} ${styles.visible}`
								: styles.mobileMenu
						}
					>
						<NavLink
							onClick={() => setMobileMenuOpen(false)}
							to="/"
							className={({ isActive }) =>
								isActive
									? `${styles.mobileNavItem} ${styles.active}`
									: styles.mobileNavItem
							}
						>
							Discover
						</NavLink>
						<NavLink
							onClick={() => setMobileMenuOpen(false)}
							to="/constructor"
							className={({ isActive }) =>
								isActive
									? `${styles.mobileNavItem} ${styles.active}`
									: styles.mobileNavItem
							}
						>
							Constructor
						</NavLink>
						<NavLink
							onClick={() => setMobileMenuOpen(false)}
							to="/burgers"
							className={({ isActive }) =>
								isActive
									? `${styles.mobileNavItem} ${styles.active}`
									: styles.mobileNavItem
							}
						>
							Burgers
						</NavLink>
						<NavLink
							onClick={() => setMobileMenuOpen(false)}
							to="/cart"
							className={({ isActive }) =>
								isActive
									? `${styles.mobileNavItem} ${styles.active}`
									: styles.mobileNavItem
							}
						>
							Cart
						</NavLink>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
