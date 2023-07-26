import React from "react"; 

function FoodBox({food, onDelete}) {
//    const totalCal = props.oneFood.servings * props.oneFood.calories; 
return (
<col> 
<card title={oneFood.name} style={{ width: 250, height: 300, margin 10 }}>
<img src={oneFood.image} alt={oneFood.name} /> 
<p>Calories: {oneFood.calories}</p>
  <p>Servings: {oneFood.servings}</p>
  <p>  <b>Total Calories: {oneFood.servings * oneFood.calories} </b> kcal
  </p>
  <button onClick={() => onDelete (oneFood.id)}>Delete</button>
</card>
</col>

);
}

export default FoodBox;