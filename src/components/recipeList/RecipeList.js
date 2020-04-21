import React, { useContext } from "react";
import RecipeListItem from "./RecipeListItem";
import { RecipeContext } from "../../context/RecipeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglassHalf,
  faArrowLeft,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Layout, Typography, Col } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchTip from "../../style/SearchTip";
import styled from "styled-components";

const { Content } = Layout;
const { Title } = Typography;

const RowWithMargin = styled(Row)`
  margin: 40px;
`;

const RecipeList = (props) => {
  const { recipes } = useContext(RecipeContext);
  const { loading } = useContext(RecipeContext);
  const { loadMoreRecipes } = useContext(RecipeContext);
  const { queryString } = useContext(RecipeContext);

  let content = null;

  if (loading) {
    content = (
      <RowWithMargin justify="center">
        <FontAwesomeIcon
          icon={faHourglassHalf}
          spin
          size="8x"
        ></FontAwesomeIcon>
      </RowWithMargin>
    );
  } else if (recipes.length === 0 && queryString === "") {
    content = (
      <Row justify="center">
        <Col span={16}>
          <SearchTip>
            <div>
              <FontAwesomeIcon icon={faArrowLeft} size="5x"></FontAwesomeIcon>
              <span>Search for a meal or ingredient</span>
            </div>
          </SearchTip>
        </Col>
      </Row>
    );
  } else if (recipes.length !== 0) {
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
  } else if (queryString !== "" && recipes.length === 0) {
    content = (
      <React.Fragment>
        <RowWithMargin justify="center">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            spin
            size="8x"
            style={{ color: "orange" }}
          ></FontAwesomeIcon>
        </RowWithMargin>
        <RowWithMargin justify="center">
          <Title level={4}>
            Sorry, we found nothing! Please try to refine your search!
          </Title>
        </RowWithMargin>
      </React.Fragment>
    );
  }
  return content;
};

export default RecipeList;
