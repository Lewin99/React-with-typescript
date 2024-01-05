import React from "react";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/footer";
import Header from "./components/Header";

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
