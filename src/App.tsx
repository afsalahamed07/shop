import React from "react";
import Navbar from "./components/navbar/NavBar";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main"></div>
    </div>
  );
};

export default App;
