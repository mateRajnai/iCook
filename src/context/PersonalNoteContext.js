import React, { createContext, useState, useContext, useEffect } from "react";
import { SelectedRecipeContext } from "./SelectedRecipeContext";
import Cookies from "js-cookie";

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

  const URLForList = `http://localhost:8080/recipe/${selectedRecipeId}/personal-note`;

  const collectNewPersonalNoteRelatedData = () => {
    const newPersonalNote = document.getElementById(
      "new-personal-note-textarea"
    ).value;
    const data = {
      content: newPersonalNote,
      recipeId: selectedRecipeId,
    };
    return data;
  };

  const getPersonalNotes = () => {
    setIsPersonalNoteCanBeShown(true);
    Axios.get(URLForList, {
      headers: {
        Authentication: `Bearer ${Cookies.get("jwt")}`,
      },
    }).then((resp) => setPersonalNotes(resp.data));
  };

  const clearPersonalNoteAddingTextArea = () => {
    document.getElementById("new-personal-note-textarea").value = "";
  };

  const addPersonalNote = (event) => {
    const data = collectNewPersonalNoteRelatedData();
    event.stopPropagation();
    Axios.post(URLForList, data, {
      headers: {
        "Content-Type": "application/json",
        Authentication: `Bearer ${Cookies.get("jwt")}`,
      },
    }).then((resp) => {
      setPersonalNotes((pervPersonalNotes) => [
        resp.data,
        ...pervPersonalNotes,
      ]);
      clearPersonalNoteAddingTextArea();
    });
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
