import React from "react";
import "./Styles/Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header: React.FC<{}> = () => {
  return (
    <div className="container-fluid Header-wrapper">
      {/*logo section*/}
      <div className="row d-flex flex-nowrap ">
        <div className="Header-logo col-8">
          <h1>Shopping Cart</h1>
        </div>
        {/*cart Section*/}
        <div className="Cart col-4">
          <div className="Cart-logo">
            <ShoppingCartIcon sx={{ fontSize: 60, color: "#282c34" }} />
          </div>
          <span className="Cart-itemsNumber">3</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
