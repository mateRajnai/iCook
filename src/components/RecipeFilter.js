import React from "react";
import { Collapse } from "antd";
import SingleInputTypeFilter from "./SingleInputTypeFilter";
import MinMaxInputTypeFilter from "./MinMaxInputTypeFilter";
import CheckboxTypeFilter from "./CheckboxTypeFilter";

const { Panel } = Collapse;

const RecipeFilter = (props) => {
  return (
    <Collapse>
      <Panel header="Detailed search options" key="1">
        <SingleInputTypeFilter
          filter={props.ingredientNumberFilter}
          setter={props.setIngredientNumber}
          key={props.ingredientNumberFilter.name}
        />
        <MinMaxInputTypeFilter
          filter={props.caloriesFilter}
          setter={props.setCaloriesFilter}
          key={props.caloriesFilter.name}
        />
        <MinMaxInputTypeFilter
          filter={props.cookTimeFilter}
          setter={props.setCookTime}
          key={props.cookTimeFilter}
        />
        <CheckboxTypeFilter
          filter={props.dietFilter}
          setter={props.setDiets}
          key={props.dietFilter.name}
        />
        <CheckboxTypeFilter
          filter={props.healthLabelFilter}
          setter={props.setHealthLabels}
          key={props.healthLabelFilter.name}
        />
        <CheckboxTypeFilter
          filter={props.mealTypeFilter}
          setter={props.setMealTypes}
          key={props.mealTypeFilter.name}
        />
        <CheckboxTypeFilter
          filter={props.dishTypeFilter}
          setter={props.setDishTypes}
          key={props.dishTypeFilter.name}
        />
        <CheckboxTypeFilter
          filter={props.cuisineFilter}
          setter={props.setCuisines}
          key={props.cuisineFilter.name}
        />
      </Panel>
    </Collapse>
  );
};

export default RecipeFilter;
