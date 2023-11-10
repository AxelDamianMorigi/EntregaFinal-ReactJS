import React from 'react';

function CartWidget() {
  return (
    <button className="cart-widget">
      <span role="img" aria-label="carrito">🛒</span>
      <span className="cart-count">0</span>
    </button>
  );
}

export default CartWidget;
