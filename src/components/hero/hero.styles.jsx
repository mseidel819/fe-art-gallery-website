import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";

export const StyledDiv = styled(Grid)({
  width: "87%",
  margin: "0 auto",
  display: "flex",

  justifyContent: "space-between",
  transform: "translate(0, -610px)",
});
export const StyledContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  width: "75%",
  backgroundColor: "#111",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
});
