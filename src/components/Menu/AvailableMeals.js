import React, { useEffect, useState } from "react";
import Card from "../User Interface/Card";
import classes from "./AvailableMeals.module.css";
import MealItems from "./MealItems/MealItems";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Veg Burger",
//     description: "Finest Aloo Tikki with schezwan sauce",
//     price: 50,
//   },
//   {
//     id: "m2",
//     name: "Veg Momos",
//     description: "A Himalayan specialty!",
//     price: 40,
//   },
//   {
//     id: "m3",
//     name: "Margherita Pizza",
//     description: "Italian Special",
//     price: 120,
//   },
//   {
//     id: "m4",
//     name: "Oreo Shake",
//     description: "Milky Way",
//     price: 60,
//   },
//   {
//     id: "m5",
//     name: "Vada Pav",
//     description: "With Green Chutney",
//     price: 35,
//   },
// ];

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isHttpError, setIsHttpError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-delivery-meals-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Unable to fetch Meals");
      }
      const data = await response.json();

      const loadData = [];
      for (let key in data) {
        loadData.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadData);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setIsHttpError(error.message);
    });
  }, []);

  const mealList = meals.map((meal) => {
    return (
      <React.Fragment>
        <MealItems
          id={meal.id}
          key={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        ></MealItems>
      </React.Fragment>
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        {isHttpError && (
          <section className={classes.errorMessage}>
            <p>{isHttpError}</p>
          </section>
        )}
        {isLoading && (
          <section className={classes.loading}>
            <p>Loading...</p>
            
          </section>
        
        )}
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
