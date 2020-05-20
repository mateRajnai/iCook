import React, { useState } from "react";

const KEYWORD_FILTER = {
  name: "Keyword",
  apiParameter: "q",
  value: "",
  queryString: "",
};

const SINGLE_INPUT_FILTERS = [
  {
    name: "Maximum ingredients",
    apiParameter: "ingr",
    unit: "pcs",
    value: "",
    queryString: "",
  },
];

const MIN_MAX_INPUT_FILTERS = [
  {
    name: "Calories",
    apiParameter: "calories",
    unit: "kcal",
    minValue: "",
    maxValue: "",
    queryString: "",
  },
  {
    name: "Cook time",
    apiParameter: "time",
    unit: "min",
    minValue: "",
    maxValue: "",
    queryString: "",
  },
];

const CHECKBOX_FILTERS = [
  {
    name: "Diet label",
    apiParameter: "diet",
    options: ["balanced", "high-protein", "low-carb", "low-fat"],
    checkedOptions: [],
    queryString: "",
  },
  {
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
  },
];

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

export const SearchContext = React.createContext();

export const SearchProvider = (props) => {
  const [keywordFilter, setKeywordFilter] = useState(KEYWORD_FILTER);
  const [singleInputTypeFilters, setSingleInputTypeFilters] = useState(
    SINGLE_INPUT_FILTERS
  );
  const [minMaxInputTypeFilters, setMinMaxInputTypeFilters] = useState(
    MIN_MAX_INPUT_FILTERS
  );
  const [checkboxTypeFilters, setCheckboxTypeFilters] = useState(
    CHECKBOX_FILTERS
  );

  const prepareFilterQuery = () => {
    let filterQuery = "";
    filterQuery += singleInputTypeFilters
      .map((filter) => filter.queryString)
      .join("");
    filterQuery += minMaxInputTypeFilters
      .map((filter) => filter.queryString)
      .join("");
    filterQuery += checkboxTypeFilters
      .map((filter) => filter.queryString)
      .join("");

    return filterQuery;
  };

  const checkIfAnyApplied = () => {
    const single = singleInputTypeFilters.find(
      (filter) => filter.queryString !== ""
    );
    const minMax = minMaxInputTypeFilters.find(
      (filter) => filter.queryString !== ""
    );
    const checked = checkboxTypeFilters.find(
      (filter) => filter.queryString !== ""
    );
    console.log(single === minMax && single === checked);
    return single === minMax && single === checked;
  };

  return (
    <SearchContext.Provider
      value={{
        keywordFilter,
        setKeywordFilter,
        singleInputTypeFilters,
        setSingleInputTypeFilters,
        minMaxInputTypeFilters,
        setMinMaxInputTypeFilters,
        checkboxTypeFilters,
        setCheckboxTypeFilters,
        prepareFilterQuery,
        checkIfAnyApplied,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
