import React from "react";
import "./CartWidget.css";
import { MdShoppingCart } from "react-icons/md";

const CartWidget = () => {
  return (
    <>
      <div className="cart">
        <div className="cart__quantity">1</div>
        <MdShoppingCart />
      </div>
    </>
  );
};

export default CartWidget;