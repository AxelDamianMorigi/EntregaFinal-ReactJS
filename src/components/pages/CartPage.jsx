
import React from 'react';
import Cart from '../Cart/Cart';
import { CartContextProvider } from '../../contexto/CartContext';

const CartPage = () => {
  return (
    <CartContextProvider>
      <div>
        <h1>Página de Carrito</h1>
        <Cart />
      </div>
    </CartContextProvider>
  );
};

export default CartPage;
