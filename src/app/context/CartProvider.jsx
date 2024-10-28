"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';


const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export default function CartProvider({children}) {

  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    if(cartItems.length > 0){
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }else{
      localStorage.removeItem("cartItems");
    }
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if(itemExists){
        return prevItems.map(item => 
          item.id === product.id ? {...item, quantity: item.quantity + 1} : item
        );
      }
      return [...prevItems, {...product, quantity: 1}];
    });
  }

  const removeFromCart = (productId) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.id !== productId)
    );
  }

  const updateItemQuantity = ((productId, quantity) => {
    setCartItems(prevItems => 
      prevItems.map(item =>
        item.id === productId ? {...item, quantity: Math.max(1, quantity)} : item
      )
    );
  });

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  const getCartTotalAmount = () => {
   return cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
   }, 0)
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateItemQuantity,
    getTotalQuantity,
    getCartTotalAmount
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}