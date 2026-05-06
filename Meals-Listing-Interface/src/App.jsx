import { useEffect, useState } from "react";
import MealCard from "./components/MealCard";

const App = () => {
  const [meals, setMeals] = useState([]);

  async function getMeals() {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/meals"
      );

      const result = await response.json();

      console.log(result);

      if (result.success) {
        setMeals(result.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <div className="container">
      <h1>🍔 Meals Listing</h1>

      <div className="meals">
        {meals.map((meal, index) => (
          <MealCard
            key={meal.idMeal || index}
            meal={meal}
          />
        ))}
      </div>
    </div>
  );
};

export default App;