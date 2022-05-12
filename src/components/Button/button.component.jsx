import { ButtonGroup } from "@mui/material";
import { StyledButton, StyledArrowSpan, StyledTextSpan } from "./button.styles";

const ButtonComp = ({ text, arrow }) => {
  return (
    <StyledButton variant="contained">
      <span className="textSpan">{text}</span>
      <span className="arrowSpan">{arrow}</span>
    </StyledButton>
  );
};

export default ButtonComp;
