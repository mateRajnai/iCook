import React from "react";

const CommentListItem = (props) => {
  let content = null;

  const comment = props.comment;

  content = (
    <div>
      <p>{comment.content}</p>
      <p>{comment.submissionTime}</p>
    </div>
  );
  return content;
};

export default CommentListItem;
