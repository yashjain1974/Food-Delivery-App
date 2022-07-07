import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Food Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClass = `${classes.button} ${isHighlighted ? classes.bump : " "}`;
  const { items } = cartCtx;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsHighlighted(true);
    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <React.Fragment>
      <button className={btnClass} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
