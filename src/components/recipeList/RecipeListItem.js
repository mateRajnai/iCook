import React, { useContext } from "react";
import { Card, Row, Col } from "antd";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import ListItem from "../../style/ListItem";
import { useHistory } from "react-router-dom";
import { SelectedRecipeContext } from "../../context/SelectedRecipeContext";
import { BookmarkedRecipesContext } from "../../context/BookmarkedRecipesContext";
import BookmarkIcon from "../../style/BookmarkIcon";

const RecipeListItem = (props) => {
  const { setSelectedRecipe } = useContext(SelectedRecipeContext);
  const {
    addToBookmarks,
    checkIfBookmarked,
    bookmarkedTheme,
    defaultTheme,
  } = useContext(BookmarkedRecipesContext);
  const recipe = props.recipe;
  let history = useHistory();

  const selectRecipe = (event) => {
    event.stopPropagation();
    setSelectedRecipe(recipe);
    const id = recipe.label.toLowerCase().replace(/ /g, "-");
    history.push(`/recipe/${id}`);
  };

  return (
    <ListItem>
      <Row justify="center">
        <Col sm={24} md={24} lg={18}>
          <Card title={recipe.label} id="RecipeCard" onClick={selectRecipe}>
            <Row gutter={[32]}>
              <Col>
                <img src={recipe.image} alt={recipe.label} height={100}></img>
              </Col>
              <Col>
                <Row>Servings:</Row>
                <Row>
                  <p>{recipe.yield}</p>
                </Row>
              </Col>
              <Col>
                <Row>Calories:</Row>
                <Row>
                  <p>{parseFloat(recipe.calories).toFixed(2)}</p>
                </Row>
              </Col>
              <Col>
                <Row>Calories per serving:</Row>
                <Row>
                  <p>
                    {(
                      parseFloat(recipe.calories) / parseFloat(recipe.yield)
                    ).toFixed(2)}
                  </p>
                </Row>
              </Col>
              <Col>
                <Row>Diet properties:</Row>
                <Row>
                  <ul>
                    {recipe.dietLabels.map((label) => (
                      <li key={label}>{label}</li>
                    ))}
                  </ul>
                </Row>
              </Col>
              <Col>
                <Row>Health properties:</Row>
                <Row>
                  <ul>
                    {recipe.healthLabels.map((label) => (
                      <li key={label}>{label}</li>
                    ))}
                  </ul>
                </Row>
              </Col>
              <Col flex="auto">
                <Row justify="center">
                  <Col>
                    <BookmarkIcon
                      onClick={addToBookmarks}
                      id="bookmark"
                      data-recipe-id={recipe.uri}
                      icon={faBookmark}
                      theme={
                        checkIfBookmarked(recipe.uri)
                          ? bookmarkedTheme
                          : defaultTheme
                      }
                      size={"5x"}
                    ></BookmarkIcon>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </ListItem>
  );
};

export default RecipeListItem;
