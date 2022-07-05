import React from "react";
import Card from "../User Interface/Card";
import classes from "./AvailableMeals.module.css";
import MealItems from "./MealItems/MealItems";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Veg Burger",
    description: "Finest Aloo Tikki with schezwan sauce",
    price: 50,
  },
  {
    id: "m2",
    name: "Veg Momos",
    description: "A german specialty!",
    price: 40,
  },
  {
    id: "m3",
    name: "Margherita Pizza",
    description: "Italian Special",
    price: 120,
  },
  {
    id: "m4",
    name: "Oreo Shake",
    description: "Milky Way",
    price: 60,
  },
  {
    id: "m5",
    name: "Vada Pav",
    description: "With Green Chutney",
    price: 35,
  },
];
const AvailableMeals = (props) => {
  const mealList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItems
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      ></MealItems>
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
