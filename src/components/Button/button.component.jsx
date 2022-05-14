import { ButtonGroup } from "@mui/material";
import { StyledButton, StyledArrowSpan, StyledTextSpan } from "./button.styles";
import { ReactComponent as RightArrow } from "../../assets/icon-arrow-right.svg";

const ButtonComp = ({ buttonHandler }) => {
  return (
    <StyledButton onClick={() => buttonHandler()} variant="contained">
      <span className="textSpan">Our Location</span>
      <span className="arrowSpan">
        <RightArrow />
      </span>
    </StyledButton>
  );
};

export default ButtonComp;
