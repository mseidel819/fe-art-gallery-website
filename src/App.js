import "./App.css";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import { Typography, Container, Grid, CardMedia, Button } from "@mui/material";
import MainPage from "./pages/main-page/main-page.component";

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: "96px",
      lineHeight: "88px",
      fontWeight: "900",
      textTransform: "uppercase",
      fontFamily: "Big Shoulders Display",
      color: "white",
      mixBlendMode: "screen",
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    h2: {
      fontSize: "70px",
      lineHeight: "70px",
      fontWeight: "900",
      textTransform: "uppercase",
      fontFamily: "Big Shoulders Display",
      marginBottom: "32px",
    },
    h3: {
      fontSize: "60px",
      lineHeight: "50px",
      fontWeight: "900",
      textTransform: "uppercase",
      fontFamily: "Big Shoulders Display",
      marginBottom: "32px",
    },
    h4: {
      fontSize: "36px",
      lineHeight: "36px",
    },
    p: {
      fontFamily: "Outfit",
      fontWeight: "300",
      fontSize: "22px",
      lineHeight: "32px",
      color: "#444444",
    },
  },
  palette: {
    primary: {
      main: "#d5966c",
    },
    secondary: {
      main: "#151515",
    },
    tertiary: {
      main: "white",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
