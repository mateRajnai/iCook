import React, { useContext } from "react";
import PersonalNoteList from "../personalNote/PersonalNoteList";
import { PersonalNoteContext } from "../../context/PersonalNoteContext";

const PersonalNoteSection = () => {
  let content = null;

  const { getPersonalNotes } = useContext(PersonalNoteContext);
  const { addPersonalNote } = useContext(PersonalNoteContext);
  const { isPersonalNoteCanBeShown } = useContext(PersonalNoteContext);

  if (isPersonalNoteCanBeShown) {
    content = (
      <div>
        <input type="text" id="new-personal-note" />
        <button onClick={addPersonalNote}>Add personal note</button>
        <PersonalNoteList />
      </div>
    );
  } else {
    content = (
      <div>
        <button onClick={getPersonalNotes}>Show personal notes</button>
      </div>
    );
  }

  return content;
};

export default PersonalNoteSection;
