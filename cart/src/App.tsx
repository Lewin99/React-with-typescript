import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Layout from "./components/Layout";

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/Cart"
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
