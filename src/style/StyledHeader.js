import styled from "styled-components";

export default styled.div`
  width: 100%;
  z-index: 1;
  position: fixed;
  & > Header {
    height: 70px;
    background-color: ${(props) => props.theme.tertiaryColor};
  }

  & * a {
    text-decoration: none;
    color: white;
    margin: 0 15px;
    font-size: large;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }

  & * a:first-child {
    margin: 0 15px 0 0;
  }

  & Button {
    float: right;
  }
`;
