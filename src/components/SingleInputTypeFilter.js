import React from "react";
import { Collapse, Input } from "antd";

const { Panel } = Collapse;

const SingleInputTypeFilter = (props) => {
  return (
    <Collapse defaultActiveKey="0">
      <Panel header={props.filter.name} key="1">
        <Input placeholder="Value" addonAfter={props.filter.unit} />
      </Panel>
    </Collapse>
  );
};

export default SingleInputTypeFilter;
