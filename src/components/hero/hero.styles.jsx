import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";

export const StyledImageContainer = styled("Container")({
  display: "flex",
  justifyContent: "flex-end",
  // width: "72%",
  height: "800px",
  backgroundColor: "#111",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  transform: "translate(0, -50px)",
  position: "relative",
});

export const StyledInfoContainer = styled(Grid)({
  // width: "80%",
  // margin: "150px auto",
  // transform: "translate(0, -660px)",
  // position: "absolute",
});
