import React, { useRef, useState } from "react";
import Input from "../../User Interface/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountisValid, setAmountisValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmount > 5
    ) {
      setAmountisValid(false);
      return;
    }
    props.onAddtoCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Unit"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>+ Add</button>
      {!amountisValid && <p>Please enter a Valid amount!(1-5)</p>}
    </form>
  );
};

export default MealItemForm;
