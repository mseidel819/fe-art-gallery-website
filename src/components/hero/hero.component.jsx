import { StyledImageContainer, StyledInfoContainer } from "./hero.styles";

import { Typography, Container, Grid, CardMedia, Button } from "@mui/material";
import heroImageDesktop from "../../assets/desktop/image-hero@2x.jpg";
import heroImageTablet from "../../assets/tablet/image-hero@2x.jpg";
import heroImageMobile from "../../assets/mobile/image-hero@2x.jpg";

import ButtonComp from "../Button/button.component";
import { ReactComponent as RightArrow } from "../../assets/icon-arrow-right.svg";

const Hero = ({ size }) => {
  return (
    <>
      <StyledImageContainer>
        <CardMedia
          component="img"
          image={
            size === "desktop"
              ? heroImageDesktop
              : size === "tablet"
              ? heroImageTablet
              : heroImageMobile
          }
          alt="hero"
          sx={{
            width: "auto",
          }}
        />
      </StyledImageContainer>

      <StyledInfoContainer container columnSpacing={8}>
        <Grid sm={6} item>
          <Typography variant="h1">
            Modern <br /> Art Gallery
          </Typography>
        </Grid>
        <Grid sm={4} item container>
          <Typography variant="p" sx={{ marginBottom: "64px" }}>
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </Typography>
          <ButtonComp text="Our Location" arrow={<RightArrow />} />
        </Grid>
      </StyledInfoContainer>
    </>
  );
};

export default Hero;
