import React, { useContext } from "react";
import PersonalNoteList from "../personalNote/PersonalNoteList";
import { PersonalNoteContext } from "../../context/PersonalNoteContext";
import { Button, Input } from "antd";

const PersonalNoteSection = () => {
  let content = null;
  const { TextArea } = Input;

  const { getPersonalNotes } = useContext(PersonalNoteContext);
  const { addPersonalNote } = useContext(PersonalNoteContext);
  const { isPersonalNoteCanBeShown } = useContext(PersonalNoteContext);

  if (isPersonalNoteCanBeShown) {
    content = (
      <div>
        <TextArea id="new-personal-note-textarea" />
        <Button onClick={addPersonalNote} className="button">
          Add personal note
        </Button>
        <PersonalNoteList />
      </div>
    );
  } else {
    content = (
      <div>
        <Button onClick={getPersonalNotes} className="button">
          Show personal notes
        </Button>
      </div>
    );
  }

  return content;
};

export default PersonalNoteSection;
