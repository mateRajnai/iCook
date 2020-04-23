import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default styled(FontAwesomeIcon)`
  color: ${(props) => props.theme[props.isbookmarked]};
  &:hover {
    cursor: pointer;
  }
`;
