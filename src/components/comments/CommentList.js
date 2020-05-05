import React, { useContext } from "react";
import { CommentContext } from "../../context/CommentContext";
import CommentListItem from "../comments/CommentListItem";
import styled from "styled-components";

const Style = styled.div`
  & *#comment-counter {
    text-align: left;
  }
  & *#comment-list {
    align-content: left;
    text-align: left;
  }
`;

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
      <div id="comment-list">
        <Style>
          <div id="comment-counter">There are {comments.length} comments.</div>
          {comments.map((comment) => (
            <CommentListItem key={comment.id} comment={comment} />
          ))}
        </Style>
      </div>
    );
  }

  return content;
};

export default CommentList;
