import React from "react"
import classes from './AvailableMeals.module.css';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Veg Burger',
      description: 'Finest Aloo Tikki with schezwan sauce',
      price: 50,
    },
    {
      id: 'm2',
      name: 'Veg Momos',
      description: 'A german specialty!',
      price: 40,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 90,
    },
    {
      id: 'm4',
      name: 'Margherita Pizza',
      description: 'Italian Spical',
      price: 120,
    },
    {
      id: 'm5',
      name: 'Oreo Shake',
      description: 'Milky Way',
      price: 60,
    },
    {
      id: 'm6',
      name: 'Vada Pav',
      description: 'With Green Chutney',
      price: 35,
    },
  ];
const AvailableMeals=props=>{
    const mealList=DUMMY_MEALS.map((meal)=>{
       return <li>{meal.name}</li>

    })

    return(
        <section className={classes.meals}>
            <ul>
                {mealList}
            </ul>
        </section>
    )

}
export default AvailableMeals