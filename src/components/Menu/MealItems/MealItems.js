import { useContext } from "react";
import classes from "./MealItems.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
const MealItems = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `Rs ${props.price.toFixed(2)}`;
  const addToItemHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm
          onAddtoCart={addToItemHandler}
          id={props.id}
        ></MealItemForm>
      </div>
    </li>
  );
};

export default MealItems;
