import React from 'react';
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <nav>
      <h1>Tienda de Celulares</h1>
      <CartWidget />
    </nav>
  );
}

export default Navbar;
