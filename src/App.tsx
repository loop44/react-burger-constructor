import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

const Footer = React.lazy(() => import("./components/Footer"));
const Header = React.lazy(() => import("./components/Header"));
const IngredientsBar = React.lazy(() => import("./components/IngredientsBar"));
const BurgerConstructor = React.lazy(() => import("./pages/BurgerConstructor"));
const Intro = React.lazy(() => import("./pages/Intro"));
const Burgers = React.lazy(() => import("./pages/Burgers"));
const Cart = React.lazy(() => import("./pages/Cart"));

const App: React.FC = () => {
	return (
		<div className="wrapper">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<Suspense fallback={<Loader />}>
								<Intro />
							</Suspense>
						}
					/>
					<Route
						path="/constructor"
						element={
							<Suspense fallback={<Loader />}>
								<BurgerConstructor />
								<IngredientsBar />
							</Suspense>
						}
					></Route>
					<Route
						path="/burgers"
						element={
							<Suspense fallback={<Loader />}>
								<Burgers />
							</Suspense>
						}
					/>
					<Route
						path="/cart"
						element={
							<Suspense fallback={<Loader />}>
								<Cart />
							</Suspense>
						}
					/>
					<Route path="*" element={<h1>Not found, sorry</h1>} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
