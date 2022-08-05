import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IngredientsBar from "./components/IngredientsBar";
import BurgerConstructor from "./pages/BurgerConstructor";
import Intro from "./pages/Intro";

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
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
