import React from "react";
import "./Styles/Cart.css";
import Layout from "./Layout";

const Cart: React.FC<{}> = () => {
  return (
    <Layout>
      <div className="cart-Items">
        <h1>Cart</h1>
      </div>
    </Layout>
  );
};

export default Cart;
