import React from "react";
import "./Styles/Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header: React.FC<{}> = () => {
  return (
    <div className="container-fluid Header-wrapper">
      {/*logo section*/}
      <div className="row d-flex flex-nowrap ">
        <div className="Header-logo col-10">
          <h1>𝕾𝖍𝖔𝖕𝖕𝖎𝖓𝖌 𝕮𝖆𝖗𝖙</h1>
        </div>
        {/*cart Section*/}
        <div className="Cart col-2">
          <div className="Cart-logo">
            <ShoppingCartIcon sx={{ fontSize: 60, color: "red" }} />
          </div>
          <span className="Cart-itemsNumber">3</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
