import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default styled(FontAwesomeIcon)`
  color: ${(props) =>
    props.isBookmarked ? props.theme.bookmarked : props.theme.bookmarkless};
  &:hover {
    cursor: pointer;
  }
`;
