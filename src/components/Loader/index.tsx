import React from "react";
import { Watch } from "react-loader-spinner";

import styles from "./Loader.module.scss";

const Loader: React.FC = () => {
	return (
		<div className={styles.loader}>
			<Watch
				height="80"
				width="80"
				radius="48"
				color="#5243c2"
				ariaLabel="watch-loading"
				wrapperStyle={{}}
				visible={true}
			/>
		</div>
	);
};

export default Loader;
