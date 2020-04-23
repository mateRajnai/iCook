import React from "react";
import { Row, Col } from "antd";

const CommentListItem = (props) => {
  let content = null;

  const comment = props.comment;

  content = (
    <div>
      <Row>
        <Col span={8}>{comment.content}</Col>
        <Col span={8}>{comment.submissionTime}</Col>
      </Row>
    </div>
  );
  return content;
};

export default CommentListItem;
