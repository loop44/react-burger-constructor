import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import IngredientsBar from "./components/IngredientsBar";
import BurgerConstructor from "./pages/BurgerConstructor";
import Intro from "./pages/Intro";
import Burgers from "./pages/Burgers";

const App: React.FC = () => {
	return (
		<div className="wrapper">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Intro />} />
					<Route
						path="/constructor"
						element={
							<>
								<BurgerConstructor />
								<IngredientsBar />
							</>
						}
					></Route>
					<Route path="/burgers" element={<Burgers />} />
					{/* <Route path="*" element={<h1>Not found, sorry</h1>} /> */}
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
