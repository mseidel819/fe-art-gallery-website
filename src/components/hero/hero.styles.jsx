import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";

export const StyledImageContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  width: "72%",
  height: "800px",
  backgroundColor: "#111",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  transform: "translate(0, -50px)",
  position: "relative",
});

export const StyledInfoContainer = styled(Grid)({
  width: "88%",
  margin: "0 44px",
  display: "flex",
  justifyContent: "space-between",
  transform: "translate(0, -660px)",
  position: "absolute",
});
