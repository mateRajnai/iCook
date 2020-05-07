import React from "react";
import { Row, Col } from "antd";

const PersonalNoteListItem = (props) => {
  let content = null;

  const personalNote = props.personalNote;

  content = (
    <div>
      <Row>
        <Col span={8}>{personalNote.content}</Col>
        <Col span={8}>{personalNote.submissionTime}</Col>
      </Row>
    </div>
  );
  return content;
};

export default PersonalNoteListItem;
