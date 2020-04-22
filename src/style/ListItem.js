import styled from "styled-components";

export default styled.div`
  & * :hover {
    background-color: ${(props) => props.theme.primaryColor};
  }

  & * svg :hover {
    color: ${(props) => props.theme.secondaryColor};
    cursor: pointer;
  }
`;
