import React from "react";
import "./Styles/Card.css";
import { Product } from "./productsData/products";

interface CardProps {
  products: Product[];
}

const Card: React.FC<CardProps> = ({ products }) => {
  return (
    <div className="container">
      <div className="Cards row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card">
              <img
                src={product.imageUrl}
                className="card-img-top"
                alt="ProductImage"
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <div className="card-price custom-card-body">
                  <h3 className="card-price-tile">Price:</h3>
                  <h4 className="card-price-tag">{product.price}$</h4>
                </div>
                <div className="card-button">
                  <button className="Cardbtn ">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
