import React from "react";
import { Collapse, Checkbox } from "antd";

const { Panel } = Collapse;

const CheckboxTypeFilter = (props) => {
  const onChange = (ckeckedValues) => {
    const filterCopy = props.filter;
    const allFiltersCopy = props.allFilters;
    filterCopy.checkedOptions = ckeckedValues;
    filterCopy.queryString = ckeckedValues
      .map((value) => `&${filterCopy.apiParameter}=${value}`)
      .join("");
    allFiltersCopy[props.index] = filterCopy;
    props.setter(allFiltersCopy);
  };

  return (
    <Collapse defaultActiveKey="0">
      <Panel
        header={props.filter.name}
        key="1"
        forceRender={props.filter.checkedOptions !== []}
      >
        <Checkbox.Group
          options={props.filter.options}
          defaultValue={props.filter.checkedOptions}
          onChange={(checkedValues) => onChange(checkedValues)}
        />
      </Panel>
    </Collapse>
  );
};

export default CheckboxTypeFilter;
