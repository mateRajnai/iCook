import React, { useContext } from "react";
import CommentList from "../comments/CommentList";
import { CommentContext } from "../../context/CommentContext";
import { Button, Input } from "antd";
import { UserContext } from "../../context/UserContext";

const CommentSection = () => {
  let content = null;
  const { TextArea } = Input;

  const { getComments } = useContext(CommentContext);
  const { addComment } = useContext(CommentContext);
  const { isCommentCanBeShown } = useContext(CommentContext);
  const { isLoggedIn } = useContext(UserContext);

  if (!isCommentCanBeShown) {
    content = (
      <div>
        <Button onClick={getComments} className="button">
          Show comments
        </Button>
      </div>
    );
  } else if (!isLoggedIn) {
    content = (
      <div>
        <CommentList />
      </div>
    );
  } else {
    content = (
      <div>
        <TextArea id="new-comment-textarea" />
        <Button onClick={addComment} className="button">
          Add comment
        </Button>
        <CommentList />
      </div>
    );
  }

  return content;
};

export default CommentSection;
