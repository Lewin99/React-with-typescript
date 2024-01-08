import React from "react";
import Card from "./Card";
import products from "../components/productsData/products";
import Layout from "./Layout";

const Home: React.FC<{}> = () => {
  return (
    <Layout>
      <div>
        <Card products={products} />
      </div>
    </Layout>
  );
};

export default Home;
