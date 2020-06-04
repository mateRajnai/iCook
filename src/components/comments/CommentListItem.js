import React from "react";
import { Comment, Tooltip, List } from "antd";
import moment from "moment";
import styled from "styled-components";

const Style = styled.div`
  & *.ant-comment-content-author-name {
    color: rgba(0, 0, 0, 0.65);
  }

  & *.ant-comment-content-author-time {
    color: rgba(0, 0, 0, 0.65);
  }

  & *.ant-comment-content-detail {
    color: rgba(0, 0, 0, 0.65);
    text-align: left;
  }
`;

const CommentListItem = (props) => {
  const comment = props.comment;
  const data = [
    {
      // After implementing login, username should be added here
      author: comment.user.userName + " commented",
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: <p>{comment.content}</p>,
      datetime: (
        <Tooltip
          title={moment(comment.submissionTime).format("YYYY-MM-DD HH:mm:ss")}
        >
          <span>{moment(comment.submissionTime).fromNow()}</span>
        </Tooltip>
      ),
    },
  ];

  let content = null;

  content = (
    <div>
      <Style>
        <List
          className="comment-list"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <li>
              <Comment
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime}
              />
            </li>
          )}
        />
      </Style>
    </div>
  );
  return content;
};

export default CommentListItem;
