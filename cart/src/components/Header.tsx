import React from "react";
import "./Styles/Header.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { CartItem } from "../Reducers/CartReducer";

const Header: React.FC<{}> = () => {
  const cartItems: CartItem[] = useSelector(
    (state: { items: CartItem[] }) => state.items
  );

  const totalItems = cartItems.length;

  return (
    <div className="container-fluid Header-wrapper">
      {/*logo section*/}
      <div className="row d-flex flex-nowrap ">
        <div className="Header-logo col-8">
          <h1>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Shopping Cart
            </Link>
          </h1>
        </div>
        {/*cart Section*/}
        <div className="Cart col-4">
          <Link to="/cart">
            <div className="Cart-logo">
              <ShoppingCartIcon sx={{ fontSize: 60, color: "#282c34" }} />
            </div>
          </Link>
          <span className="Cart-itemsNumber">{totalItems}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
