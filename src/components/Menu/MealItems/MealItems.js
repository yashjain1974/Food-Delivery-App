import classes from './MealItems.module.css';
import MealItemForm from './MealItemForm';
const MealItems=props=>{
    const price=`Rs ${props.price.toFixed(2)}`;
    return(
        <li className={classes.meal}>
            <div >
           <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm></MealItemForm>

            </div>
        </li>
    )

}

export default MealItems;