import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartContextProvider } from './contexto/CartContext';  // Importa el proveedor de contexto

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>  {/* Envuelve tu aplicación en el proveedor de contexto */}
      <App />
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
