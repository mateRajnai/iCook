import React, { createContext, useState, useContext, useEffect } from "react";
import { SelectedRecipeContext } from "./SelectedRecipeContext";
import { UserContext } from "../context/UserContext";
import { notification } from "antd";

import Axios from "axios";

export const PersonalNoteContext = createContext();

export const PersonalNoteProvider = (props) => {
  const [personalNotes, setPersonalNotes] = useState([]);
  const [isPersonalNoteCanBeShown, setIsPersonalNoteCanBeShown] = useState(
    false
  );

  const { isLoggedIn } = useContext(UserContext);
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
    if (isLoggedIn) {
      setIsPersonalNoteCanBeShown(true);
      Axios.get(URLForList, {
        withCredentials: true,
      }).then((resp) => setPersonalNotes(resp.data));
    } else {
      notification.open({
        message: "Please sign in!",
        description: "Guests are not allowed to add personal notes to recipes!",
        placement: "topRight",
        top: 50,
      });
    }
  };

  const clearPersonalNoteAddingTextArea = () => {
    document.getElementById("new-personal-note-textarea").value = "";
  };

  const addPersonalNote = (event) => {
    const data = collectNewPersonalNoteRelatedData();
    event.stopPropagation();
    Axios.post(URLForList, data, {
      withCredentials: true,
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
