import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";

import { selectChangeMode } from "../../redux/burgerConstructor/selectors";
import {
  toggleChangeMode,
  zoomIn,
  zoomOut,
} from "../../redux/burgerConstructor/slice";

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
        </>
      )}
    </div>
  );
};

export default Toolbar;