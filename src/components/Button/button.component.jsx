import { ButtonGroup } from "@mui/material";
import { StyledButton, StyledArrowSpan, StyledTextSpan } from "./button.styles";

const ButtonComp = ({ text, arrow }) => {
  return (
    <StyledButton variant="contained">
      <StyledTextSpan>{text}</StyledTextSpan>
      <StyledArrowSpan>{arrow}</StyledArrowSpan>
    </StyledButton>
  );
};

export default ButtonComp;
