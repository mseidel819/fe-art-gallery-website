import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const StyledImageContainer = styled(Container)({
  display: "flex",
  justifyContent: "flex-end",
  // width: "72%",
  height: "800px",
  backgroundColor: "#111",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  transform: "translate(0, -50px)",
  position: "relative",
});
