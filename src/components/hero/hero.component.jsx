import { StyledContainer, StyledDiv } from "./hero.styles";

import { Typography, Container, Grid, CardMedia, Button } from "@mui/material";
import heroImage from "../../assets/desktop/image-hero@2x.jpg";

const Hero = () => {
  return (
    <>
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

      <StyledDiv container columnSpacing={8}>
        <Grid sm={6} item>
          <Typography variant="h1">
            Modern <br /> Art Gallery
          </Typography>
        </Grid>
        <Grid sm={4} item>
          <Typography variant="p">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </Typography>

          <Button>Our location</Button>
        </Grid>
      </StyledDiv>
    </>
  );
};

export default Hero;
