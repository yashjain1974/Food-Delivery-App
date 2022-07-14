import React, { useContext, useState } from "react";
import Modal from "../User Interface/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

import classes from "./Cart.module.css";
const Cart = (props) => {
  const [order, setOrder] = useState(false);

  const [isError, setIsError] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const[didSubmitted,setDidSubmitted]=useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `Rs.${cartCtx.totalAmount}`;
  const hasItem = cartCtx.items.length > 0;
  const onCartItemAdd = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const onCartItemRemove = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={onCartItemAdd.bind(null, item)}
          onRemove={onCartItemRemove.bind(null, item.id)}
        ></CartItem>
      ))}
    </ul>
  );
  const onShowOrderHandler = (props) => {
    setOrder((prev) => (prev = !prev));
  };
  const submitOrderHandler = async (userData) => {
   
    try {
      setIsSubmitting(true);
      const response = await fetch(
        "https://food-delivery-meals-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: userData,
            orderedItems: cartCtx.items,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Unable to Order...");
      }
      setIsSubmitting(false);
      setDidSubmitted(true);
    } catch (error) {
      setIsSubmitting(false);
      setIsError(error.message);
    }
  };
  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {order && (
        <Checkout
          onCancel={props.onClose}
          onConfirm={submitOrderHandler}
        ></Checkout>
      )}

      {!order && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>

          {hasItem && (
            <button className={classes.button} onClick={onShowOrderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );

  const didSubmitModelContent=<React.Fragment>
    <p>Successfully sent the data</p>
    <div className={classes.actions}>
  <button className={classes["button--alt"]} onClick={props.onClose}>
    Close
  </button>
  </div>
  
  </React.Fragment>
  return <Modal onClose={props.onClose}>
    {!isSubmitting &&!didSubmitted && cartModalContent}
    {isSubmitting && <p>Submitting...</p>}
     {!isSubmitting && didSubmitted && didSubmitModelContent }
    {/* {isError && <p>{isError}</p>} */}
  </Modal>;
};

export default Cart;
