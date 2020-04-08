import React from "react";
import { Collapse, Input } from "antd";

const { Panel } = Collapse;

const SingleInputTypeFilter = (props) => {
  const onChange = (e) => {
    const filterCopy = props.filter;
    filterCopy.value = e.target.value;
    filterCopy.queryString = `&${filterCopy.apiParameter}=${filterCopy.value}`;
    props.setter(filterCopy);
  };

  return (
    <Collapse defaultActiveKey="0">
      <Panel header={props.filter.name} key="1">
        <Input
          placeholder="Value"
          addonAfter={props.filter.unit}
          onChange={onChange}
          defaultValue={props.filter.value}
        />
      </Panel>
    </Collapse>
  );
};

export default SingleInputTypeFilter;
