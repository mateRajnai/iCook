import React from "react";
import { Collapse, Input, Row, Col } from "antd";

const { Panel } = Collapse;

const MinMaxInputTypeFilter = (props) => {
  return (
    <Collapse defaultActiveKey="0">
      <Panel header={props.filter.name} key={props.filter.name}>
        <Input.Group>
          <Row gutter={20}>
            <Col span={12}>
              <Input
                addonBefore="Between"
                addonAfter={props.filter.unit}
                placeholder="minimum"
              />
            </Col>
            <Col span={8}>
              <Input placeholder="maximum" addonAfter={props.filter.unit} />
            </Col>
          </Row>
        </Input.Group>
      </Panel>
    </Collapse>
  );
};

export default MinMaxInputTypeFilter;
