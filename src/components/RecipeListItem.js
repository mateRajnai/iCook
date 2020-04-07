import React from "react";

const RecipeListItem = (props) => {
  console.log(props);
  return (
    <div>
      <img src={props.recipe.image} alt={props.recipe.label}></img>
      <span>{props.recipe.label}</span>
      {props.recipe.dietLabels.map((label) => (
        <li>{label}</li>
      ))}
      {props.recipe.healthLabels.map((label) => (
        <li>{label}</li>
      ))}
    </div>
  );
};

export default RecipeListItem;
