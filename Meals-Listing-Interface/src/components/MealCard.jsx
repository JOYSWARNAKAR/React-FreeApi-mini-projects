const MealCard = ({ meal }) => {
  return (
    <div className="card">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />

      <div className="content">
        <h3>{meal.strMeal}</h3>

        <p>{meal.strCategory}</p>

        <span>{meal.strArea}</span>
      </div>
    </div>
  );
};

export default MealCard;