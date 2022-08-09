import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { selectChangeMode } from "../../redux/burgerConstructor/selectors";

import styles from "./Header.module.scss";

import Logo from "../../assets/images/logo.svg";

const Header: React.FC = () => {
	const changeMode = useSelector(selectChangeMode);

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
					<a className={styles.tel} href="tel:88004378722">
						Call me back
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
