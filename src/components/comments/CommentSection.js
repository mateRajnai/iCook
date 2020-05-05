import React, { useContext } from "react";
import CommentList from "../comments/CommentList";
import { CommentContext } from "../../context/CommentContext";
import { Button, TextArea, Input } from "antd";
import styled from "styled-components";

const Style = styled.div`
  & #new-comment-textarea {
  }
`;

const CommentSection = () => {
  let content = null;

  const { getComments } = useContext(CommentContext);
  const { addComment } = useContext(CommentContext);
  const { isCommentCanBeShown } = useContext(CommentContext);

  if (isCommentCanBeShown) {
    content = (
      <div>
        <Input type="text" id="new-comment-textarea" />
        <Button onClick={addComment} className="button">
          Add comment
        </Button>
        <CommentList />
      </div>
    );
  } else {
    content = (
      <div>
        <Button onClick={getComments} className="button">
          Show comments
        </Button>
      </div>
    );
  }

  return content;
};

export default CommentSection;
