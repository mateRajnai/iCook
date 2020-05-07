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

const PersonalNoteListItem = (props) => {
  const personalNote = props.personalNote;
  const data = [
    {
      // After implementing login, username should be added here
      content: <p>{personalNote.content}</p>,
      datetime: (
        <Tooltip
          title={moment(personalNote.submissionTime).format(
            "YYYY-MM-DD HH:mm:ss"
          )}
        >
          <span>{moment(personalNote.submissionTime).fromNow()}</span>
        </Tooltip>
      ),
    },
  ];

  let content = null;

  content = (
    <div>
      <Style>
        <List
          className="personal-note-list"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <li>
              <Comment content={item.content} datetime={item.datetime} />
            </li>
          )}
        />
      </Style>
    </div>
  );
  return content;
};

export default PersonalNoteListItem;
