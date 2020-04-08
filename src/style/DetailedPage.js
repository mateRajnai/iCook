import styled from "styled-components";

export default styled.div`
  padding: 20px;
  & *#container {
    padding: 20px;
    border: 2px solid #005500;
    background-color: #cbffcb;
    border-radius: 10px;
  }

  & * img {
    border: 1px solid #005500;
  }

  & *#header h1 {
    font-size: 200%;
  }

  & *#header {
    margin-bottom: 20px;
  }

  & *.main-row#recipe-details {
    padding: 0 0 20px;
  }

  & *.main-row {
    padding: 20px 0 20px 0;
    border-bottom: 1px dotted #005500;
  }

  & *#recipe-labels {
    text-align: center;
  }

  & *#recipe-labels * p {
    margin: 3px;
  }

  & *#comments,
  *#notes {
    text-align: center;
  }
`;
