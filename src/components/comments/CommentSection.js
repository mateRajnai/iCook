import React, { useContext } from "react";
import CommentList from "../comments/CommentList";
import { CommentContext } from "../../context/CommentContext";
import { Input, Button } from "antd";

const CommentSection = () => {
  let content = null;

  const { getComments } = useContext(CommentContext);
  const { addComment } = useContext(CommentContext);
  const { isCommentCanBeShown } = useContext(CommentContext);

  if (isCommentCanBeShown) {
    content = (
      <div>
        <Input type="text" id="new-comment" />
        <Button onClick={addComment}>Add comment</Button>
        <CommentList />
      </div>
    );
  } else {
    content = (
      <div>
        <Button onClick={getComments}>Show comments</Button>
      </div>
    );
  }

  return content;
};

export default CommentSection;
