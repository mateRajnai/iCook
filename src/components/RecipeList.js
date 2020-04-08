import React, { useContext } from "react";
import RecipeListItem from "./RecipeListItem";
import { RecipeContext } from "../context/RecipeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { Row, Layout } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

const { Content } = Layout;

const RecipeList = (props) => {
  const { recipes } = useContext(RecipeContext);
  const { loading } = useContext(RecipeContext);
  const { loadMoreRecipes } = useContext(RecipeContext);
  let content = null;

  if (loading) {
    content = (
      <Row justify="center" style={{ margin: "40px" }}>
        <FontAwesomeIcon
          icon={faHourglassHalf}
          spin
          size="8x"
        ></FontAwesomeIcon>
      </Row>
    );
  } else {
    content = (
      <Content>
        <InfiniteScroll
          dataLength={recipes.length - 1}
          next={loadMoreRecipes}
          hasMore={true}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          releaseToRefreshContent={
            <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
          }
        >
          {recipes.map((recipe) => (
            <RecipeListItem key={recipe.uri} recipe={recipe} />
          ))}
        </InfiniteScroll>
      </Content>
    );
  }
  return content;
};

export default RecipeList;
