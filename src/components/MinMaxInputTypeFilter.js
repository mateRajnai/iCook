import React from "react";
import { Collapse, Input, Row, Col } from "antd";

const { Panel } = Collapse;

const MinMaxInputTypeFilter = (props) => {
  return (
    <Collapse defaultActiveKey="0">
      <Panel header={props.filter.name} key="1">
        <Input.Group>
          <Row gutter={8}>
            <Col span={5}>
              <Input
                addonBefore="Between"
                addonAfter={props.filter.unit}
                placeholder="minimum"
              />
            </Col>
            <Col span={5}>
              <Input placeholder="maximum" addonAfter={props.filter.unit} />
            </Col>
          </Row>
        </Input.Group>
      </Panel>
    </Collapse>
  );
};

export default MinMaxInputTypeFilter;
