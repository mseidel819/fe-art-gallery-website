import { CardMedia, Grid } from "@mui/material";

import ImageMapDesktop from "../../assets/desktop/image-map@2x.png";
import ImageMapTablet from "../../assets/tablet/image-map@2x.png";
import ImageMapMobile from "../../assets/mobile/image-map@2x.png";

import ButtonBack from "../button-back/button-back.component";

const Map = ({ size, buttonHandler }) => {
  return (
    <>
      <div>
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
      <Grid
        sx={{
          top: 0,
          position: "absolute",
          marginLeft: `${
            size === "desktop" ? "150px" : size === "tablet" ? "50px" : "0px"
          }`,
        }}
      >
        <ButtonBack buttonHandler={buttonHandler} />
      </Grid>
    </>
  );
};

export default Map;
