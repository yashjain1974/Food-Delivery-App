import React, { useReducer } from "react";
import CartContext from "./cart-context";

const cartDefaultState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedtotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItemList;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItemList = [...state.items];
      updatedItemList[existingCartItemIndex] = updatedItem;
    } else {
      updatedItemList = state.items.concat(action.item);
    }

    return {
      items: updatedItemList,
      totalAmount: updatedtotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedtotalAmount = state.totalAmount - existingCartItem.price;
    let updateItems;
    if (existingCartItem.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updateItems = [...state.items];
      updateItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updateItems,
      totalAmount: updatedtotalAmount,
    };
  }
  return cartDefaultState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    cartDefaultState
  );
  const addItemCartHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };
  const removeItemCartHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
