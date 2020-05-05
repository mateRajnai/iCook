import React, { createContext, useState, useContext, useEffect } from "react";
import { SelectedRecipeContext } from "./SelectedRecipeContext";
import { v4 as uuidv4 } from "uuid";

import Axios from "axios";

export const CommentContext = createContext();

export const CommentProvider = (props) => {
  const [comments, setComments] = useState([]);
  const [isCommentCanBeShown, setIsCommentCanBeShown] = useState(false);

  // TO-DO: selectedRecipeId must be replaced to uri
  const { selectedRecipe } = useContext(SelectedRecipeContext);
  const selectedRecipeId = selectedRecipe.label
    .toLowerCase()
    .replace(/ /g, "-");

  const URL = `http://localhost:8080/recipe/${selectedRecipeId}/comments`;

  const collectNewCommentRelatedData = () => {
    const newComment = document.getElementById("new-comment-textarea").value;
    const newCommentId = uuidv4();
    const data = {
      id: newCommentId,
      content: newComment,
      submissionTime: null,
      recipeId: selectedRecipeId,
    };
    return data;
  };

  const getComments = () => {
    setIsCommentCanBeShown(true);
    Axios.get(URL).then((resp) => setComments(resp.data));
  };

  const clearCommentAddingTextArea = () => {
    document.getElementById("new-comment-textarea").value = "";
  };

  const addComment = (event) => {
    const data = collectNewCommentRelatedData();
    event.stopPropagation();
    Axios.post(URL, data, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => {
      setComments(resp.data);
      clearCommentAddingTextArea();
    });
  };

  useEffect(() => {}, [comments]);

  return (
    <CommentContext.Provider
      value={{
        comments,
        getComments,
        addComment,
        isCommentCanBeShown,
      }}
    >
      {props.children}
    </CommentContext.Provider>
  );
};
