import styled from "styled-components";

export default styled.div`
  position: "fixed";
  z-index: 1;
  width: 100%;
  height: "100px";

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
`;
