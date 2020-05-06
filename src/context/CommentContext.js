import React, { createContext, useState, useContext, useEffect } from "react";
import { SelectedRecipeContext } from "./SelectedRecipeContext";

import Axios from "axios";

export const CommentContext = createContext();

export const CommentProvider = (props) => {
  const [comments, setComments] = useState([]);
  const [isCommentCanBeShown, setIsCommentCanBeShown] = useState(false);

  const escapeUriCharacters = (uri) => {
    return uri.replace(/\//g, "%2F").replace(/:/g, "%3A").replace(/#/g, "%23");
  };

  // TO-DO: selectedRecipeId must be replaced to uri
  const { selectedRecipe } = useContext(SelectedRecipeContext);
  console.log(selectedRecipe);
  const selectedRecipeId = selectedRecipe.label
    .toLowerCase()
    .replace(/ /g, "-");

  const URL = `http://localhost:8080/recipe/${selectedRecipeId}/comments`;

  const collectNewCommentRelatedData = () => {
    const newComment = document.getElementById("new-comment-textarea").value;
    const data = {
      content: newComment,
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
      setComments((prevComments) => [resp.data, ...prevComments]);
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
