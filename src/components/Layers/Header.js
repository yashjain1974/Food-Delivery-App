import React from "react";
import classes from './Header.module.css';
import mealImage from '../../images/header_image1.jpg';

const Header=props=>{
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>FoodOpia</h1>
                <button>Cart</button>
            </header>
            <div className={classes["main-image"]}>
                <img src={mealImage} alt="food of your choice"></img>
            </div>


        </React.Fragment>
    )
}

export default Header;