import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IngredientsBar from "./components/IngredientsBar";
import BurgerConstructor from "./pages/BurgerConstructor";
import Intro from "./pages/Intro";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      {/* <Intro /> */}
      <BurgerConstructor />
      <IngredientsBar />
      <Footer />
    </div>
  );
};

export default App;
