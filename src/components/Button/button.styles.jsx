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

  ".textSpan": {
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
    transition: "all .3s ",
  },

  ".arrowSpan": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "56px",
    backgroundColor: "#d5966c",
    transition: "all .3s ",
  },

  "&:hover": {
    ".arrowSpan": {
      backgroundColor: "#151515",
    },
    ".textSpan": {
      backgroundColor: "#d5966c",
    },
  },
});
