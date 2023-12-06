// src/components/Cart/Cart.jsx
import React from "react";
import { useCartContext } from "../../contexto/CartContext";

const Cart = () => {
  const { cart, deleteProduct } = useCartContext();

  // Función para calcular el total
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <h2>Tu Carrito</h2>
          {cart.map(product => (
            <div key={product.id}>
              <h3>{product.name}</h3>
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
