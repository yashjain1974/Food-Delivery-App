import React from "react";
import classes from "./Checkout.module.css";
const Checkout = (props) => {
  return (
    <React.Fragment>
        <form className={classes.form}> 
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Adddress</label>
        <input type="text" id="address"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city"></input>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button className={classes.submit}>Submit</button>
      </div>
      </form>
    </React.Fragment>
  );
};
export default Checkout;
