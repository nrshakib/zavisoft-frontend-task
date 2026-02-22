/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("zavisoft_cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
      }
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem("zavisoft_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, size, color, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.id === product.id && item.size === size && item.color === color,
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      }

      return [
        ...prevItems,
        {
          ...product,
          size,
          color,
          quantity,
          uniqueId: `${product.id}-${size}-${color}-${Date.now()}`,
        },
      ];
    });
  };

  const removeFromCart = (uniqueId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.uniqueId !== uniqueId),
    );
  };

  const updateQuantity = (uniqueId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.uniqueId === uniqueId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const updateSize = (uniqueId, newSize) => {
    setCartItems((prevItems) => {
      const itemToUpdate = prevItems.find((item) => item.uniqueId === uniqueId);
      if (!itemToUpdate || itemToUpdate.size === newSize) return prevItems;

      // Check if another item with the same ID and new size already exists
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.id === itemToUpdate.id &&
          item.size === newSize &&
          item.color === itemToUpdate.color &&
          item.uniqueId !== uniqueId,
      );

      if (existingItemIndex > -1) {
        // Merge with existing item
        const updatedItems = prevItems.filter(
          (item) => item.uniqueId !== uniqueId,
        );
        updatedItems[existingItemIndex].quantity += itemToUpdate.quantity;
        return updatedItems;
      }

      // Just update the size and uniqueId
      return prevItems.map((item) =>
        item.uniqueId === uniqueId
          ? {
              ...item,
              size: newSize,
              uniqueId: `${item.id}-${newSize}-${item.color}-${Date.now()}`,
            }
          : item,
      );
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    updateSize,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
