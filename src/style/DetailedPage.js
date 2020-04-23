import styled from "styled-components";

export default styled.div`
  & *#container {
    padding: 20px;
    border: 2px solid ${(props) => props.theme.secondaryColor};
    background-color: ${(props) => props.theme.primaryColor};
    border-radius: 10px;
    font-size: ${(props) => props.theme.fontSize};
  }

  & * img {
    border: 1px solid ${(props) => props.theme.secondaryColor};
  }

  & *#header h1 {
    font-size: 200%;
  }

  & *#header {
    margin-bottom: 20px;
  }
`;
