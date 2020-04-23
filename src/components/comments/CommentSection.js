import React, { useContext } from "react";
import CommentList from "../comments/CommentList";
import { CommentContext } from "../../context/CommentContext";

const CommentSection = () => {
  let content = null;

  const { getComments } = useContext(CommentContext);
  const { addComment } = useContext(CommentContext);
  const { isCommentCanBeShown } = useContext(CommentContext);

  if (isCommentCanBeShown) {
    content = (
      <div>
        <input type="text" id="new-comment" />
        <button onClick={addComment}>Add comment</button>
        <CommentList />
      </div>
    );
  } else {
    content = (
      <div>
        <button onClick={getComments}>Show comments</button>
      </div>
    );
  }

  return content;
};

export default CommentSection;
