import React from "react";
import { Collapse, Input, Row, Col } from "antd";

const { Panel } = Collapse;

const MinMaxInputTypeFilter = (props) => {
  const buildQueryString = (min, max) => {
    const baseString = `&${props.filter.apiParameter}=`;

    if (min !== "" && max === "") {
      return `${baseString}${min}%2b`;
    } else if (min !== "" && max !== "") {
      return `${baseString}${min}-${max}`;
    } else if (max !== "") {
      return `${baseString}${max}`;
    }
    return "";
  };

  const handleOnChange = (e) => {
    const property = e.target.name;
    const value = parseInt(e.target.value) ? e.target.value : "";
    const allFiltersCopy = props.allFilters;
    const filterCopy = props.filter;

    if (property === "min") {
      filterCopy.minValue = value;
    } else {
      filterCopy.maxValue = value;
    }
    filterCopy.queryString = buildQueryString(
      filterCopy.minValue,
      filterCopy.maxValue
    );
    allFiltersCopy[props.index] = filterCopy;
    props.setter(allFiltersCopy);
    console.log(filterCopy.queryString);
  };

  return (
    <Collapse defaultActiveKey="0">
      <Panel header={props.filter.name} key={props.filter.name}>
        <Input.Group>
          <Row gutter={24}>
            <Col span={14}>
              <Input
                addonBefore="Between"
                addonAfter={props.filter.unit}
                placeholder="min"
                name="min"
                defaultValue={props.filter.minValue}
                onChange={handleOnChange}
              />
            </Col>
            <Col span={10}>
              <Input
                placeholder="max"
                addonAfter={props.filter.unit}
                defaultValue={props.filter.maxValue}
                onChange={handleOnChange}
              />
            </Col>
          </Row>
        </Input.Group>
      </Panel>
    </Collapse>
  );
};

export default MinMaxInputTypeFilter;
