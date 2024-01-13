import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { useCartContext } from "../../contexto/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useCartContext();


  const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <div className="cart-widget">
      <Link to="/cart" className="cart-link">
        <MdShoppingCart />
        {totalQuantity > 0 && (
          <span className="cart-quantity">{totalQuantity}</span>
        )}
        {totalQuantity > 0 && <span className="cart-label">Carrito</span>}
      </Link>
    </div>
  );
};

export default CartWidget;
