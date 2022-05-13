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
      {/* <Grid container>
        <Grid item lg={8}>
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
        </Grid>
        <Grid item lg={4}></Grid>
      </Grid> */}
      <Grid
        container
        justifyContent={size === "tablet" ? "right" : "center"}
        sx={
          {
            // width: `${size === "desktop" ? "90%" : "95%"}`,
            // margin: "150px auto",
          }
        }
      >
        <Grid item sx={{ display: { xs: "block", sm: "none" } }}>
          <CardMedia component="img" image={heroImageMobile} alt="hero image" />
        </Grid>
        <StyledInfoContainer
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
            <ButtonComp text="Our Location" arrow={<RightArrow />} />
          </Grid>
        </StyledInfoContainer>
      </Grid>
    </>
  );
};

export default Hero;
