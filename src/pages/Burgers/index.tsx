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
import { BurgerShopItem, FetchStatus } from "../../redux/burgersShop/types";

const Burgers: React.FC = () => {
	const dispatch = useAppDispatch();
	const items = useSelector(selectBurgers);
	const loadingStatus = useSelector(selectLoadingStatus);
	const { sort, categoryId, searchValue } = useSelector(selectFilter);

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

	/*
		Client Search

		The search is done on the client because mockApi does not work 
		well with search parameters: if you select a category 
		sort and do a search by name, it will ignore the search and 
		sort parameters
	*/
	const burgers = items
		.filter((obj) => {
			if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
				return true;
			} else {
				return false;
			}
		})
		.map((item: BurgerShopItem) => <BurgerItem key={item.id} item={item} />);
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
