import styled from "styled-components";

export default styled.div`
  display: block;

  & > div > * {
    display: inline-block;
    margin: 0 10px;
  }

  & * span {
    font-size: 400%;
  }

  & > div {
    width: max-content;
    margin: auto;
  }
`;
