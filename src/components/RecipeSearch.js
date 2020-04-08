import React from "react";
import SearchByKeyword from "./SearchByKeyword";
import RecipeFilter from "./RecipeFilter";
import { useState } from "react";

const KEYWORD_FILTER = {
  name: "Keyword",
  apiParameter: "q",
  value: "",
  queryString: "",
};

const INGREDIENT_NUMBER_FILTER = {
  name: "Maximum ingredients",
  apiParameter: "ingr",
  unit: "pcs",
  value: "",
  queryString: "",
};

const CALORIES_FILTER = {
  name: "Calories",
  apiParameter: "calories",
  unit: "kcal",
  minValue: "",
  maxValue: "",
  queryString: "",
};

const COOK_TIME_FILTER = {
  name: "Cook time",
  apiParameter: "time",
  unit: "minutes",
  minValue: "",
  maxValue: "",
  queryString: "",
};

const DIET_FILTER = {
  name: "Diet label",
  apiParameter: "diet",
  options: ["balanced", "high-protein", "low-carb", "low-fat"],
  checkedOptions: [],
  queryString: "",
};

const HEALTH_FILTER = {
  name: "Health label",
  apiParameter: "health",
  options: [
    "alcohol-free",
    "peanut-free",
    "sugar-conscious",
    "tree-nut-free",
    "vegan",
    "vegetarian",
  ],
  checkedOptions: [],
  queryString: "",
};

// const MEAL_TYPE_FILTER = {
//   name: "Meal type",
//   apiParameter: "mealType",
//   options: ["Breakfast", "Lunch", "Dinner", "Snack"],
//   checkedOptions: [],
//   queryString: "",
// };

// const DISH_TYPE_FILTER = {
//   name: "Dish type",
//   apiParameter: "dishType",
//   options: [
//     "Bread",
//     "Cereals",
//     "Condiments and sauces",
//     "Drinks",
//     "Desserts",
//     "Main course",
//     "Pancake",
//     "Preps",
//     "Preserve",
//     "Salad",
//     "Sandwiches",
//     "Side dish",
//     "Soup",
//     "Starter",
//     "Sweets",
//   ],
//   checkedOptions: [],
//   queryString: "",
// };

// const CUISINE_FILTER = {
//   name: "Cuisine type",
//   apiParameter: "cuisineType",
//   options: [
//     "American",
//     "Asian",
//     "British",
//     "Caribbean",
//     "Central Europe",
//     "Chinese",
//     "Eastern Europe",
//     "French",
//     "Indian",
//     "Italian",
//     "Japanese",
//     "Kosher",
//     "Mediterranean",
//     "Mexican",
//     "Middle Eastern",
//     "Nordic",
//     "South American",
//     "South East Asian",
//   ],
//   checkedOptions: [],
//   queryString: "",
// };

// const NUTRITIENT_FILTER = {
//   name: "Nutritients",
//   options: [
//     { name: "Calcium", NTR: "CA", unit: "mg" },
//     { name: "Carbs", NTR: "CHOCDF", unit: "g" },
//     { name: "Cholesterol", NTR: "CHOLE", unit: "mg" },
//     { name: "Monounsaturated", NTR: "FAMS", unit: "g" },
//     { name: "Polyunsaturated", NTR: "FAPU", unit: "g" },
//     { name: "Saturated", NTR: "FASAT", unit: "g" },
//     { name: "Fat", NTR: "FAT", unit: "g" },
//     { name: "Trans", NTR: "FATRN", unit: "g" },
//     { name: "Iron", NTR: "FE", unit: "mg" },
//     { name: "Fiber", NTR: "FIBTG", unit: "g" },
//     { name: "Folate (Equivalent)", NTR: "FOLFE", unit: "aeg" },
//     { name: "Potassium", NTR: "K", unit: "mg" },
//     { name: "Magnesium", NTR: "MG", unit: "mg" },
//     { name: "Sodium", NTR: "NA", unit: "mg" },
//     { name: "Energy", NTR: "ENERC_KCAL", unit: "kcal" },
//     { name: "Niacin (B3)", NTR: "NIA", unit: "mg" },
//     { name: "Phosphorus", NTR: "P", unit: "mg" },
//     { name: "Protein", NTR: "PROCNT", unit: "g" },
//     { name: "Riboflavin (B2)", NTR: "RIBF", unit: "mg" },
//     { name: "Sugars", NTR: "SUGAR", unit: "g" },
//     { name: "Thiamin (B1)", NTR: "THIA", unit: "mg" },
//     { name: "Vitamin E", NTR: "TOCPHA", unit: "mg" },
//     { name: "Vitamin A", NTR: "VITA_RAE", unit: "aeg" },
//     { name: "Vitamin B12", NTR: "VITB12", unit: "aeg" },
//     { name: "Vitamin B6", NTR: "VITB6A", unit: "mg" },
//     { name: "Vitamin C", NTR: "VITC", unit: "mg" },
//     { name: "Vitamin D", NTR: "VITD", unit: "aeg" },
//     { name: "Vitamin K", NTR: "VITK1", unit: "aeg" },
//   ],
//   checkedOptions: [],
//   queryString: "",
// };

const RecipeSearch = () => {
  const [keywordFilter, setKeyword] = useState(KEYWORD_FILTER);
  const [ingredientNumberFilter, setIngredientNumber] = useState(
    INGREDIENT_NUMBER_FILTER
  );
  const [caloriesFilter, setCalories] = useState(CALORIES_FILTER);
  const [cookTimeFilter, setCookTime] = useState(COOK_TIME_FILTER);
  const [dietFilter, setDiets] = useState(DIET_FILTER);
  const [healthLabelFilter, setHealthLabels] = useState(HEALTH_FILTER);

  const prepareFilterQuery = () => {
    console.log(ingredientNumberFilter.queryString);
    return (
      ingredientNumberFilter.queryString +
      caloriesFilter.queryString +
      cookTimeFilter.queryString +
      dietFilter.queryString +
      healthLabelFilter.queryString
    );
  };

  return (
    <React.Fragment>
      <SearchByKeyword
        keywordFilter={keywordFilter}
        setKeyword={setKeyword}
        prepareFilterQuery={prepareFilterQuery}
      />
      <RecipeFilter
        ingredientNumberFilter={ingredientNumberFilter}
        setIngredientNumber={setIngredientNumber}
        caloriesFilter={caloriesFilter}
        setCalories={setCalories}
        cookTimeFilter={cookTimeFilter}
        setCookTime={setCookTime}
        dietFilter={dietFilter}
        setDiets={setDiets}
        healthLabelFilter={healthLabelFilter}
        setHealthLabels={setHealthLabels}
      />
    </React.Fragment>
  );
};

export default RecipeSearch;
