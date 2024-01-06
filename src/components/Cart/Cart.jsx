// src/components/cart/Cart.jsx
import React from "react";
import { useCartContext } from "../../contexto/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, deleteProduct } = useCartContext();

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <h2>Tu Carrito</h2>
          {cart.map((product) => (
            <div key={product.id} className="product-item">
              <h3>{product.title}</h3>
              <p>Cantidad: {product.quantity}</p>
              <p>Precio: ${product.price}</p>
              <p>Subtotal: ${product.price * product.quantity}</p>
              <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
            </div>
          ))}
          <h3>Total: ${calculateTotal()}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
