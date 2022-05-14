import { CardMedia, Container, Grid } from "@mui/material";

import ImageMapDesktop from "../../assets/desktop/image-map@2x.png";
import ImageMapTablet from "../../assets/tablet/image-map@2x.png";
import ImageMapMobile from "../../assets/mobile/image-map@2x.png";

import ButtonBack from "../button-back/button-back.component";

const Map = ({ size, buttonHandler }) => {
  return (
    <>
      <div sx={{ position: "relative", margin: 0 }}>
        <CardMedia
          component="img"
          image={
            size === "desktop"
              ? ImageMapDesktop
              : size === "tablet"
              ? ImageMapTablet
              : ImageMapMobile
          }
          alt="location map"
        />
      </div>
      <Container
        sx={{
          top: 0,
          position: "absolute",
          marginLeft: `${
            size === "desktop" ? "150px" : size === "tablet" ? "50px" : "-20px"
          }`,
        }}
      >
        <ButtonBack buttonHandler={buttonHandler} />
      </Container>
    </>
  );
};

export default Map;
