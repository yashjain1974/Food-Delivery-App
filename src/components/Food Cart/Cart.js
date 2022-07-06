import React from "react";
import Modal from "../User Interface/Modal";

import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "m1",
          name: "Veg Burger",
          description: "Finest Aloo Tikki with schezwan sauce",
          price: 50,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>50</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
      </Modal>
  );
};

export default Cart;
