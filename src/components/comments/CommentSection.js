import React, { useContext } from "react";
import CommentList from "../comments/CommentList";
import { CommentContext } from "../../context/CommentContext";
import { Button, Input } from "antd";

const CommentSection = () => {
  let content = null;
  const { TextArea } = Input;

  const { getComments } = useContext(CommentContext);
  const { addComment } = useContext(CommentContext);
  const { isCommentCanBeShown } = useContext(CommentContext);

  if (isCommentCanBeShown) {
    content = (
      <div>
        <TextArea />
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
