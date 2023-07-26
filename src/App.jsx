import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState(foodsJson); 
  return (
    <div className="App">
      <h1>IronNutrition</h1>
      {foods.map((oneFood) => {
        return (
          <>
          <h3>{oneFood.name}</h3>
          <img 
          src={oneFood.image}
          alt={oneFood.name}
          style={{ height: "100px"}}
          />
          <h3>Calories: {oneFood.calories}</h3>
          <h3>Servings: {oneFood.servings}</h3>
          <button onClick={() => {deleteFood(oneFood.id); 
          }}>Delete</button>
          </>
        );
      })}
    </div>
  );
}

export default App;