import React from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from "../Food Cart/CartIcon";

const HeaderCartButton=props=>{
    return(
        <React.Fragment>
            <button className={classes.button}>
                <span className={classes.icon}>
                    <CartIcon></CartIcon>

                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>
                    3
                </span>
            </button>
        </React.Fragment>
    )

}

export default HeaderCartButton;