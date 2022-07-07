import React,{useContext} from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from "../Food Cart/CartIcon";
import CartContext from "../../store/cart-context";


const HeaderCartButton=props=>{
    const cartCtx=useContext(CartContext);
    const numberOfCartItems=cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
      }, 0);
      console.log(numberOfCartItems);
    return(
        <React.Fragment>
            <button className={classes.button} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon></CartIcon>

                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>
                   {numberOfCartItems}
                </span>
            </button>
        </React.Fragment>
    )

}

export default HeaderCartButton;