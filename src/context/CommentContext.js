import React, { createContext, useState, useContext, useEffect } from "react";
import { SelectedRecipeContext } from "./SelectedRecipeContext";
import { UserContext } from "./UserContext";
import Axios from "axios";
export const CommentContext = createContext();
export const CommentProvider = (props) => {
  const [comments, setComments] = useState([]);
  const [isCommentCanBeShown, setIsCommentCanBeShown] = useState(false);
  const { id: userId } = useContext(UserContext);
  const { selectedRecipe } = useContext(SelectedRecipeContext);
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
    Axios.get(URL, {
      withCredentials: true,
    }).then((resp) => setComments(resp.data));
  };

  const clearCommentAddingTextArea = () => {
    document.getElementById("new-comment-textarea").value = "";
  };

  const addComment = (event) => {
    const data = collectNewCommentRelatedData();
    event.stopPropagation();
    Axios.post(URL + "/" + userId, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }).then((resp) => {
      console.log(resp);
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
