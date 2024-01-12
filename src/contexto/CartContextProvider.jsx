import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const deleteProduct = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const isItemInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  const canAddToCart = (productId, quantityToAdd) => {
    const product = cart.find(item => item.id === productId);
    if (product) {
      return product.quantity + quantityToAdd <= product.stock;
    }
    return true;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteProduct, clearCart, getTotalItems, getTotalPrice, isItemInCart, canAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
