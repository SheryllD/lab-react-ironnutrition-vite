import "./App.css";
import foodsJson from "./foods.json";
import Foodbox from "./components/FoodBox"; 
import { useState } from "react";
import AddFoodForm from "./components/AddFoodForm"

function App() {
  const [foods, setFoods] = useState(foodsJson); 
  
  const deleteFoods = (currentFoodId) => {
    setFoods((prevFoods) => 
    prevFoods.filter((food) => food.id !== currentFoodId)
    ); 
  };

  const addFoods = (newFoods) => {
    setFoods((prevFoods) => [...prevFoods, newFoods]); 
  }; 

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm addFoods={addFoods} /> 
      {foods.map((food) => (
        <div className="Food-box" key={food.id}>
          <FoodBox foods={food} deleteFoods={deleteFoods} />
          </div>
      ))}
      </div>
  );
}

export default App;

/*
   "id": "b5eb5b5f-41b8-4f1f-8844-7a1a56a17df7",
    "name": "Sweet Potato",
    "calories": 120,
    "image": "https://i.imgur.com/hGraGyR.jpg",
    "servings": 1 

    <table> 
      <thead>
        <tr>
<th>Name</th>
<th>Calories</th>
<th>Serving</th>
        </tr>
      </thead>
    </table>
    

    */