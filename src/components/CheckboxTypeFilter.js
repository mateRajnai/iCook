import React from "react";
import { Collapse, Checkbox } from "antd";

const { Panel } = Collapse;

const CheckboxTypeFilter = (props) => {
  return (
    <Collapse defaultActiveKey="0">
      <Panel header={props.filter.name} key="1">
        {props.filter.values.map((value) => (
          <Checkbox key={value}>{value}</Checkbox>
        ))}
      </Panel>
    </Collapse>
  );
};

export default CheckboxTypeFilter;
