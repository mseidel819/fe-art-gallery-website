import {
  StyledButton,
  StyledArrowSpan,
  StyledTextSpan,
} from "./button-back.styles";

import { ReactComponent as LeftArrow } from "../../assets/icon-arrow-left.svg";

const ButtonBack = ({ buttonHandler }) => {
  return (
    <StyledButton onClick={() => buttonHandler()} variant="contained">
      <span className="arrowSpan">
        <LeftArrow />
      </span>
      <span className="textSpan">Back to home</span>
    </StyledButton>
  );
};

export default ButtonBack;
