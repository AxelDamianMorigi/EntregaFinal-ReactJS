// src/contexto/CartContext.jsx
import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
  const context = useContext(CartContext);
  return context;
};

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addNewProduct = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  const deleteProduct = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addNewProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};
