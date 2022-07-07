import React,{useReducer} from "react";
import CartContext from "./cart-context";

const cartDefaultState={
  items:[],
  totalAmount:0
};
const cartReducer=(state,action)=>{
  if(action.type==="ADD"){
    const updatedItemList=state.items.concat(action.item);
    const updatedtotalAmount=state.totalAmount+action.item.price*action.item.amount;
    return{
      items:updatedItemList,
      totalAmount:updatedtotalAmount
    }
  }
  return cartDefaultState;

}
const CartProvider = (props) => {
  const [cartState,dispatchCartState]=useReducer(cartReducer,cartDefaultState);
  const addItemCartHandler = (item) => {
    dispatchCartState({type:"ADD",item:item});

  };
  const removeItemCartHandler = (id) => {
    dispatchCartState({type:"REMOVE",id:id});

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
