import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => (
	<ContentLoader
		speed={2}
		width={250}
		height={304}
		viewBox="0 0 250 304"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<path d="M 29 249 h 51 v 25 H 29 z" />
		<circle cx="199" cy="261" r="20" />
		<circle cx="150" cy="261" r="20" />
		<path d="M 65 204 h 120 v 21 H 65 z M 44 155 h 161 v 7 c 0 11.046 -8.954 20 -20 20 H 64 c -11.046 0 -20 -8.954 -20 -20 v -7 z M 44 121 h 161 v 27 H 44 v -27 z M 44 87 h 161 v 27 H 44 V 87 z" />
		<path d="M 44 80 h 160.436 c -3.448 -21.282 -38.046 -38 -80.218 -38 C 82.045 42 47.448 58.718 44 80 z" />
	</ContentLoader>
);

export default Skeleton;
