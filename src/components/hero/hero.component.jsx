import { StyledImageContainer, StyledInfoContainer } from "./hero.styles";

import { Typography, Container, Grid, CardMedia, Button } from "@mui/material";
import heroImageDesktop from "../../assets/desktop/image-hero@2x.jpg";
import heroImageTablet from "../../assets/tablet/image-hero@2x.jpg";
import heroImageMobile from "../../assets/mobile/image-hero@2x.jpg";

import ButtonComp from "../Button/button.component";

const Hero = ({ size, buttonHandler }) => {
  return (
    <>
      <Grid
        container
        sx={{ display: `${size === "mobile" ? "none" : "flex"}` }}
      >
        <Grid item lg={3.5} sm={0} sx={{ backgroundColor: "#151515" }}></Grid>
        <Grid item lg={5} sm={7} sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            image={size === "desktop" ? heroImageDesktop : heroImageTablet}
          />
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent={size === "tablet" ? "right" : "center"}
        sx={{
          top: 0,
          position: `${size === "mobile" ? "static" : "absolute"}`,
          transform: `${
            size === "mobile" ? "translateY(0)" : "translateY(130px)"
          }`,
        }}
      >
        <Grid item sx={{ display: { xs: "block", sm: "none" } }}>
          <CardMedia component="img" image={heroImageMobile} alt="hero image" />
        </Grid>
        <Grid
          container
          item
          columnSpacing={0}
          sx={{
            width: `${size === "desktop" ? "80%" : "340px"}`,
            // margin: "150px auto",
            margin: "50px 40px",
          }}
        >
          <Grid lg={8} item>
            <Typography variant="h1">
              Modern <br /> Art Gallery
            </Typography>
          </Grid>
          <Grid lg={4} item container>
            <Typography variant="p" sx={{ marginBottom: "64px" }}>
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </Typography>
            <ButtonComp buttonHandler={buttonHandler} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
