import React, { useContext } from "react";
import { CommentContext } from "../../context/CommentContext";
import CommentListItem from "../comments/CommentListItem";

const CommentList = () => {
  const { comments } = useContext(CommentContext);
  let content = null;

  if (comments.length === 0) {
    content = (
      <div>
        <p>No comments yet.</p>
      </div>
    );
  } else {
    content = (
      <div>
        {comments.map((comment) => (
          <CommentListItem key={comment.id} comment={comment} />
        ))}
      </div>
    );
  }

  return content;
};

export default CommentList;
