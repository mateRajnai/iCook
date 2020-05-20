import React from "react";
import { Collapse } from "antd";
import SingleInputTypeFilter from "./filterTypes/SingleInputTypeFilter";
import MinMaxInputTypeFilter from "./filterTypes/MinMaxInputTypeFilter";
import CheckboxTypeFilter from "./filterTypes/CheckboxTypeFilter";
import { useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";

const { Panel } = Collapse;

const RecipeFilter = (props) => {
  const { singleInputTypeFilters, setSingleInputTypeFilters } = useContext(
    SearchContext
  );
  const { minMaxInputTypeFilters, setMinMaxInputTypeFilters } = useContext(
    SearchContext
  );
  const { checkboxTypeFilters, setCheckboxTypeFilters } = useContext(
    SearchContext
  );
  const { checkIfAnyApplied } = useContext(SearchContext);
  return (
    <Collapse defaultActiveKey={checkIfAnyApplied() ? "0" : "1"}>
      <Panel
        header="Detailed search options"
        key="1"
        style={{ maxBlockSize: "100%" }}
      >
        {singleInputTypeFilters.map((filter, index) => (
          <SingleInputTypeFilter
            allFilters={singleInputTypeFilters}
            setter={setSingleInputTypeFilters}
            filter={filter}
            key={filter.name}
            index={index}
          />
        ))}
        {minMaxInputTypeFilters.map((filter, index) => (
          <MinMaxInputTypeFilter
            allFilters={minMaxInputTypeFilters}
            filter={filter}
            setter={setMinMaxInputTypeFilters}
            key={filter.name}
            index={index}
          />
        ))}
        {checkboxTypeFilters.map((filter, index) => (
          <CheckboxTypeFilter
            allFilters={checkboxTypeFilters}
            filter={filter}
            setter={setCheckboxTypeFilters}
            key={filter.name}
            index={index}
          />
        ))}
      </Panel>
    </Collapse>
  );
};

export default RecipeFilter;
