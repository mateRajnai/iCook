import React, { useContext } from "react";
import { PersonalNoteContext } from "../../context/PersonalNoteContext";
import PersonalNoteListItem from "../personalNote/PersonalNoteListItem";

const PersonalNoteList = () => {
  const { personalNotes } = useContext(PersonalNoteContext);
  let content = null;

  if (personalNotes.length === 0) {
    content = (
      <div>
        <p>No personal notes yet.</p>
      </div>
    );
  } else {
    content = (
      <div>
        {personalNotes.map((personalNote) => (
          <PersonalNoteListItem
            key={personalNote.id}
            personalNote={personalNote}
          />
        ))}
      </div>
    );
  }

  return content;
};

export default PersonalNoteList;
