import React, { useContext } from "react";
import Modal from "../User Interface/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `Rs.${cartCtx.totalAmount}`;
  const hasItem = cartCtx.items.length > 0;
  const onCartItemAdd=(item)=>{

  }
  const onCartItemRemove=(id)=>{

  }
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={onCartItemAdd.bind(null,item)}
          onRemove={onCartItemRemove.bind(null,item.id)}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
