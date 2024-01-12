import React, { useState, useEffect } from 'react';
import { useCartContext } from '../../contexto/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, deleteProduct, clearCart, getTotalPrice } = useCartContext();
  const [thankYouMessage, setThankYouMessage] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setThankYouMessage('');
    }, 3000);

    return () => clearTimeout(timer);
  }, [thankYouMessage]);

  const checkout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      clearCart();
    }, 3000);
  };

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p>{thankYouMessage || 'Tu carrito está vacío.'}</p>
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
          <h3>Total: ${getTotalPrice()}</h3>
          {isCheckingOut ? (
            <p>Procesando pago...</p>
          ) : (
            <>
              <button onClick={clearCart} className="clear-cart-button">
                Vaciar Carrito
              </button>
              <button onClick={checkout} className="checkout-button">
                Finalizar Compra
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
