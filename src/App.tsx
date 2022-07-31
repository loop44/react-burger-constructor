import React from "react";
import Footer from "./components/Footer";
import Intro from "./pages/Intro";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Intro />
      <Footer />
    </div>
  );
};

export default App;
