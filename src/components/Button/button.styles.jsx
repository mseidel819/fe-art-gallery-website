import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledTextSpan = styled("span")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  backgroundColor: "#151515",
  height: "100%",
  fontFamily: "Big Shoulders Display",
  fontWeight: "800",
  fontSize: "20px",
  lineHeight: "24px",
  letterSpacing: "3.63636px",
  width: "204px",
});

export const StyledArrowSpan = styled("span")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "56px",
});

export const StyledButton = styled(Button)({
  borderRadius: "0px",
  display: "flex",
  padding: 0,
  height: "72px",

  "&:hover": {
    backgroundColor: "#151515",
  },
});
