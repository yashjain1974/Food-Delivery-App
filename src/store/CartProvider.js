import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemCartHandler = (items) => {};
  const removeItemCartHandler = (items) => {};
  const cartContext = React.createContext({
    items: [],
    totalamount: 0,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
  });
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
