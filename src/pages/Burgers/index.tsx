import React, { useEffect } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../redux/store";

import {
	selectBurgers,
	selectLoadingStatus,
} from "../../redux/burgersShop/selectors";
import { selectFilter } from "../../redux/filter/selectors";

import { fetchBurgers } from "../../redux/burgersShop/asyncActions";

import BurgerItem from "../../components/BurgerItem";
import Filter from "../../components/Filter";

import styles from "./Burgers.module.scss";
import Skeleton from "../../components/BurgerItem/Skeleton";
import { FetchStatus } from "../../redux/burgersShop/types";

const Burgers: React.FC = () => {
	const dispatch = useAppDispatch();
	const items = useSelector(selectBurgers);
	const loadingStatus = useSelector(selectLoadingStatus);
	const { sort, categoryId } = useSelector(selectFilter);

	const getPizzas = async () => {
		const sortBy = sort.sortProperty.replace("-", "");
		const order = sort.sortProperty.includes("-") ? "asc" : "desc";
		const category = categoryId > 0 ? String(categoryId) : "";

		dispatch(
			fetchBurgers({
				sortBy,
				order,
				category,
			})
		);
	};

	useEffect(() => {
		getPizzas();
	}, [categoryId, sort]);

	const burgers = items.map((item: any) => (
		<BurgerItem key={item.id} item={item} />
	));
	const skeletons = [...new Array(12)].map((_, index) => (
		<Skeleton key={index} />
	));

	return (
		<div className={styles.burgers}>
			<Filter />
			<Scrollbars style={{ height: "100%" }} autoHide>
				<div className={styles.items}>
					{loadingStatus === FetchStatus.ERROR ? (
						<div>
							<h2>Произошла ошибка 😕</h2>
						</div>
					) : (
						<>{loadingStatus === FetchStatus.LOADING ? skeletons : burgers}</>
					)}
				</div>
			</Scrollbars>
		</div>
	);
};

export default Burgers;
