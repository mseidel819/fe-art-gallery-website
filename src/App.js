import "./App.css";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import { Typography, Container, Grid, CardMedia, Button } from "@mui/material";
import heroImage from "./assets/desktop/image-hero@2x.jpg";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "96px",
      lineSpacing: "88px",
    },
    h2: {
      fontSize: "70px",
      lineSpacing: "70px",
    },
    h3: {
      fontSize: "60px",
      lineSpacing: "50px",
    },
    h4: {
      fontSize: "36px",
      lineSpacing: "36px",
    },
  },
  palette: {
    primary: {
      main: "#d5966c",
    },
    secondary: {
      main: "#151515",
    },
  },
});

const StyledContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  width: "75%",
  backgroundColor: "#111",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <CardMedia
          component="img"
          image={heroImage}
          alt="hero"
          sx={{
            height: "800px",
            width: "auto",
          }}
        />
      </StyledContainer>
      <Grid container>
        <Grid item>
          <Typography variant="h1" fontWeight={700}>
            Modern Art Gallery
          </Typography>
        </Grid>
        <Grid container item>
          <Grid item>
            <Typography variant="p">
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </Typography>
          </Grid>
          <Grid item>
            <Button>click</Button>
          </Grid>
        </Grid>
      </Grid>{" "}
    </ThemeProvider>
  );
}

export default App;
