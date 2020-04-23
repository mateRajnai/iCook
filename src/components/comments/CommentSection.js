import React, { useContext } from "react";
import CommentList from "../comments/CommentList";
import { CommentContext } from "../../context/CommentContext";

const CommentSection = () => {
  let content = null;

  const { getComments } = useContext(CommentContext);
  const { addComment } = useContext(CommentContext);
  const { isCommentCanBeShown } = useContext(CommentContext);

  // Refactor is needed, code duplication
  if (isCommentCanBeShown) {
    content = (
      <div>
        <button onClick={getComments}>Show comments</button>
        <input type="text" id="new-comment" />
        <button onClick={addComment}>Add comment</button>
        <CommentList />
      </div>
    );
  } else {
    content = (
      <div>
        <button onClick={getComments}>Show comments</button>
        <input type="text" id="new-comment" />
        <button onClick={addComment}>Add comment</button>
      </div>
    );
  }

  return content;
};

export default CommentSection;
