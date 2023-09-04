/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// CartItem { product: {}, quantity: 1}

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const itemIndex = cart.findIndex(
      (cartItem) => cartItem.product.id === product.id
    );
    if (itemIndex > -1) {
      //   const item = cart[itemIndex];
      //   const newCartItem = { ...item, quantity: item.quantity + 1 };
      //   const newCart = [
      //     ...cart.slice(0, itemIndex),
      //     newCartItem,
      //     ...cart.slice(itemIndex + 1),
      //   ];
      cart[itemIndex].quantity = cart[itemIndex].quantity + 1;
      const newCart = [...cart];
      setCart(newCart);
    } else {
      const cartItem = { product, quantity: 1 };

      setCart([cartItem]);

      console.log(cartItem);
    }
  };

  const removeFromCart = (product) => {
    const itemIndex = cart.findIndex(
      (cartItem) => cartItem.product.id === product.id
    );
    if (itemIndex > -1) {
      const newCart = cart.splice(itemIndex, 1);
      setCart(newCart);
    }
  };

  const decreaseItemInCart = (product) => {
    const itemIndex = cart.findIndex(
      (cartItem) => cartItem.product.id === product.id
    );
    if (itemIndex > -1) {
      if (cart[itemIndex].quantity > 1) {
        cart[itemIndex].quantity = cart[itemIndex].quantity - 1;
        const newCart = [...cart];
        setCart(newCart);
      } else {
        const newCart = cart.splice(itemIndex, 1);
        setCart(newCart);
      }
    }
  };

  // Read data from localStorage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("cart");
    if (storedData) {
      setCart(JSON.parse(storedData));
    }
  }, []);

  // Write data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, decreaseItemInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
