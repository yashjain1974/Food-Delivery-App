import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const refName = useRef();
  const refAddress = useRef();
  const refPostalCode = useRef();
  const refCity = useRef();

  const [isformValidity, setIsformValidity] = useState({
    name: true,
    address: true,
    postal: true,
    city: true,
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName = refName.current.value;
    const enteredAddress = refAddress.current.value;
    const enteredPostal = refPostalCode.current.value;
    const enteredCity = refCity.current.value;

    const isValidEnteredName = !(enteredName.trim() === "");
    const isValidEnteredAddress = !(enteredAddress.trim() === "");
    const isValidEnteredPostal = !(enteredPostal.trim().length === 5);
    const isValidEnteredCity = !(enteredCity.trim()=== "");

    setIsformValidity({
      name: isValidEnteredName,
      address: isValidEnteredAddress,
      postal: isValidEnteredPostal,
      city: isValidEnteredCity,
    });

    const formIsValid =
      isValidEnteredAddress &&
      isValidEnteredName &&
      isValidEnteredPostal &&
      isValidEnteredCity;

    if (!formIsValid) {
      return;
    }
  };

  return (
    <React.Fragment>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div
          className={`${classes.control} ${
            isformValidity.name ? "" : classes.invalid
          }`}
        >
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" ref={refName}></input>
          {!isformValidity.name && <p>field must not be empty</p>}
        </div>

        <div
          className={`${classes.control} ${
            isformValidity.address ? "" : classes.invalid
          }`}
        >
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={refAddress}></input>
          {!isformValidity.address && <p>field must not be empty</p>}
        </div>
        <div
          className={`${classes.control} ${
            isformValidity.postal ? "" : classes.invalid
          }`}
        >
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" ref={refPostalCode}></input>
          {!isformValidity.postal && <p>field must contain 5 characters</p>}
        </div>
        <div
          className={`${classes.control} ${
            isformValidity.city ? "" : classes.invalid
          }`}
        >
          <label htmlFor="city">City</label>
          <input type="text" id="city" ref={refCity}></input>
          {!isformValidity.city && <p>field must not be empty </p>}
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes.submit}>Submit</button>
        </div>
      </form>
    </React.Fragment>
  );
};
export default Checkout;
