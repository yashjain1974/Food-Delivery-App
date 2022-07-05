import Input from '../../User Interface/Input';
import classes from './MealItemForm.module.css';
const MealItemForm=props=>{
    return(
        <form className={classes.form}>
            <Input 
            label="Unit"
            input={{
                id:"Amount",
                type:"number",
                min:"1",
                max:"5",
                step:"1",
                defaultValue:"1"
            }}></Input>
            <button>+ Add</button>

        </form>
    )

}

export default MealItemForm;