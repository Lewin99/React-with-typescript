import React from "react";
import "./Styles/Cart.css";
import Layout from "./Layout";
import { useSelector } from "react-redux";
import { CartItem } from "../Reducers/CartReducer";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Reducers/CartReducer";

const Cart: React.FC<{}> = () => {
  const dispatch = useDispatch();
  // Use useSelector to access the items array from the Redux store
  const cartItems: CartItem[] = useSelector(
    (state: { items: CartItem[] }) => state.items
  );

  const RemoveItem = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  return (
    <Layout>
      <div className="cart-Items">
        <h1 className="cartTitle">Cart</h1>
        <div className="cart-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.imageUrl} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <div className="itemPrice d-flex justify-content-center align-content-center">
                  <h4>Price</h4>: <h3>${item.price}</h3>
                </div>
                <button className="Cartbtn" onClick={() => RemoveItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="subTotal d-flex justify-content-between align-items-center g-5">
          <div className="label">
            <h2>SubTotal:</h2>
          </div>
          <div className="amount">
            <h2>${subtotal.toFixed(2)}</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
