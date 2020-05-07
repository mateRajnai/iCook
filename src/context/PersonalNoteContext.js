import React, { createContext, useState, useContext, useEffect } from "react";
import { SelectedRecipeContext } from "./SelectedRecipeContext";
import { v4 as uuidv4 } from "uuid";

import Axios from "axios";

export const PersonalNoteContext = createContext();

export const PersonalNoteProvider = (props) => {
  const [personalNotes, setPersonalNotes] = useState([]);
  const [isPersonalNoteCanBeShown, setIsPersonalNoteCanBeShown] = useState(
    false
  );

  // TO-DO: selectedRecipeId must be replaced to uri
  const { selectedRecipe } = useContext(SelectedRecipeContext);
  const selectedRecipeId = selectedRecipe.label
    .toLowerCase()
    .replace(/ /g, "-");

  const URLForList = `http://localhost:8080/recipe/${selectedRecipeId}/personal-note/list`;
  const URLForSave = `http://localhost:8080/recipe/${selectedRecipeId}/personal-note/save`;

  const collectNewPersonalNoteRelatedData = () => {
    const newPersonalNote = document.getElementById("new-personal-note").value;
    const newPersonalNoteId = uuidv4();
    const data = {
      id: newPersonalNoteId,
      content: newPersonalNote,
      submissionTime: null,
      recipeId: selectedRecipeId,
    };
    return data;
  };

  const getPersonalNotes = () => {
    setIsPersonalNoteCanBeShown(true);
    Axios.get(URLForList).then((resp) => setPersonalNotes(resp.data));
  };

  const addPersonalNote = (event) => {
    const data = collectNewPersonalNoteRelatedData();
    event.stopPropagation();
    Axios.post(URLForSave, data, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => setPersonalNotes(resp.data));
  };

  useEffect(() => {}, [personalNotes]);

  return (
    <PersonalNoteContext.Provider
      value={{
        personalNotes,
        getPersonalNotes,
        addPersonalNote,
        isPersonalNoteCanBeShown,
      }}
    >
      {props.children}
    </PersonalNoteContext.Provider>
  );
};
