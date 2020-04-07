import React from "react";
import { Collapse } from "antd";
import { useState } from "react";
import SingleInputTypeFilter from "./SingleInputTypeFilter";
import MinMaxInputTypeFilter from "./MinMaxInputTypeFilter";
import CheckboxTypeFilter from "./CheckboxTypeFilter";

const { Panel } = Collapse;

const RecipeFilter = (props) => {
  const FILTER_PROPERTIES = {
    singleInputTypeFilters: [
      { name: "Maximum ingredients", apiParameter: "ingr", unit: "pcs" },
    ],

    minMaxInputTypes: [
      { name: "Calories", apiParameter: "calories", unit: "kcal" },
      { name: "Cook time", apiParameter: "time", unit: "minutes" },
    ],

    radioTypeFilters: [
      {
        name: "Diet label",
        apiParameter: "diet",
        values: [
          "balanced",
          "high-fiber",
          "high-protein",
          "low-carb",
          "low-fat",
          "low-sodium",
        ],
      },
      {
        name: "Health label",
        apiParameter: "health",
        values: [
          "alcohol-free",
          "celery-free",
          "crustacean-free",
          "dairy-free",
          "egg-free",
          "fish-free",
          "fodmap-free",
          "gluten-free",
          "keto-friendly",
          "kidney-friendly",
          "kosher",
          "low-potassium",
          "lupine-free",
          "mustard-free",
          "low-fat-abs",
          "No-oil-added",
          "low-sugas",
          "paleo",
          "peanut-free",
          "pecatarian",
          "pork-free",
          "red-meat-free",
          "sesame-free",
          "shellfish-free",
          "soy-free",
          "sugar-conscious",
          "tree-nut-free",
          "vegan",
          "wheat-free",
        ],
      },
      {
        name: "Meal type",
        apiParameter: "mealType",
        values: ["Breakfast", "Lunch", "Dinner", "Snack"],
      },
      {
        name: "Dish type",
        apiParameter: "dishType",
        values: [
          "Bread",
          "Cereals",
          "Condiments and sauces",
          "Drinks",
          "Desserts",
          "Main course",
          "Pancake",
          "Preps",
          "Preserve",
          "Salad",
          "Sandwiches",
          "Side dish",
          "Soup",
          "Starter",
          "Sweets",
        ],
      },
      {
        name: "Cuisine type",
        apiParameter: "cuisineType",
        values: [
          "American",
          "Asian",
          "British",
          "Caribbean",
          "Central Europe",
          "Chinese",
          "Eastern Europe",
          "French",
          "Indian",
          "Italian",
          "Japanese",
          "Kosher",
          "Mediterranean",
          "Mexican",
          "Middle Eastern",
          "Nordic",
          "South American",
          "South East Asian",
        ],
      },
    ],

    hybridFilters: [
      {
        name: "Nutritients",
        values: [
          { name: "Calcium", NTR: "CA", unit: "mg" },
          { name: "Carbs", NTR: "CHOCDF", unit: "g" },
          { name: "Cholesterol", NTR: "CHOLE", unit: "mg" },
          { name: "Monounsaturated", NTR: "FAMS", unit: "g" },
          { name: "Polyunsaturated", NTR: "FAPU", unit: "g" },
          { name: "Saturated", NTR: "FASAT", unit: "g" },
          { name: "Fat", NTR: "FAT", unit: "g" },
          { name: "Trans", NTR: "FATRN", unit: "g" },
          { name: "Iron", NTR: "FE", unit: "mg" },
          { name: "Fiber", NTR: "FIBTG", unit: "g" },
          { name: "Folate (Equivalent)", NTR: "FOLFE", unit: "aeg" },
          { name: "Potassium", NTR: "K", unit: "mg" },
          { name: "Magnesium", NTR: "MG", unit: "mg" },
          { name: "Sodium", NTR: "NA", unit: "mg" },
          { name: "Energy", NTR: "ENERC_KCAL", unit: "kcal" },
          { name: "Niacin (B3)", NTR: "NIA", unit: "mg" },
          { name: "Phosphorus", NTR: "P", unit: "mg" },
          { name: "Protein", NTR: "PROCNT", unit: "g" },
          { name: "Riboflavin (B2)", NTR: "RIBF", unit: "mg" },
          { name: "Sugars", NTR: "SUGAR", unit: "g" },
          { name: "Thiamin (B1)", NTR: "THIA", unit: "mg" },
          { name: "Vitamin E", NTR: "TOCPHA", unit: "mg" },
          { name: "Vitamin A", NTR: "VITA_RAE", unit: "aeg" },
          { name: "Vitamin B12", NTR: "VITB12", unit: "aeg" },
          { name: "Vitamin B6", NTR: "VITB6A", unit: "mg" },
          { name: "Vitamin C", NTR: "VITC", unit: "mg" },
          { name: "Vitamin D", NTR: "VITD", unit: "aeg" },
          { name: "Vitamin K", NTR: "VITK1", unit: "aeg" },
        ],
      },
    ],
  };
  const [filterProperties] = useState(FILTER_PROPERTIES);

  return (
    <Collapse>
      <Panel header="Detailed search options" key="1">
        {filterProperties.singleInputTypeFilters.map((filter) => (
          <SingleInputTypeFilter filter={filter} key={filter.name} />
        ))}
        {filterProperties.minMaxInputTypes.map((filter) => (
          <MinMaxInputTypeFilter filter={filter} key={filter.name} />
        ))}
        {filterProperties.radioTypeFilters.map((filter) => (
          <CheckboxTypeFilter filter={filter} key={filter.name} />
        ))}
      </Panel>
    </Collapse>
  );
};

export default RecipeFilter;
