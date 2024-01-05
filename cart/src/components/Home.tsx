import React from "react";
import Card from "./Card";
import products from "../components/productsData/products";

const Home: React.FC<{}> = () => {
  return (
    <div>
      <Card products={products} />
    </div>
  );
};

export default Home;
