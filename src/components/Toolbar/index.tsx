import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";

import { selectChangeMode } from "../../redux/burgerConstructor/selectors";
import {
	removeAll,
	toggleChangeMode,
	zoomIn,
	zoomOut,
} from "../../redux/burgerConstructor/slice";
import { removeAllIngredients } from "../../redux/ingredients/slice";

import styles from "./Toolbar.module.scss";

const Toolbar: React.FC = () => {
	const dispatch = useAppDispatch();
	const changeMode = useSelector(selectChangeMode);

	const onChangeMode = () => {
		dispatch(toggleChangeMode());
	};

	const onZoomIn = () => {
		dispatch(zoomIn());
	};

	const onZoomOut = () => {
		dispatch(zoomOut());
	};

	const onRemoveAllClick = () => {
		dispatch(removeAll());
		dispatch(removeAllIngredients());
	};

	return (
		<div className={styles.toolbar}>
			{/* Change layers icon */}
			<svg
				className={changeMode ? styles.active : ""}
				onClick={onChangeMode}
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2 14.5001L11.6422 19.3212C11.7734 19.3868 11.839 19.4196 11.9078 19.4325C11.9687 19.4439 12.0313 19.4439 12.0922 19.4325C12.161 19.4196 12.2266 19.3868 12.3578 19.3212L22 14.5001M2 9.50006L11.6422 4.67895C11.7734 4.61336 11.839 4.58056 11.9078 4.56766C11.9687 4.55622 12.0313 4.55622 12.0922 4.56766C12.161 4.58056 12.2266 4.61336 12.3578 4.67895L22 9.50006L12.3578 14.3212C12.2266 14.3868 12.161 14.4196 12.0922 14.4325C12.0313 14.4439 11.9687 14.4439 11.9078 14.4325C11.839 14.4196 11.7734 14.3868 11.6422 14.3212L2 9.50006Z"
					stroke="black"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			{/* Zoom in icon */}
			{changeMode ? null : (
				<>
					<svg
						onClick={onZoomIn}
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M21 21L16.65 16.65M11 8V14M8 11H14M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					{/* Zoom out icon */}
					<svg
						onClick={onZoomOut}
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M21 21L16.65 16.65M8 11H14M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					{/* Remove all icon */}
					<svg
						onClick={onRemoveAllClick}
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
				</>
			)}
		</div>
	);
};

export default Toolbar;
