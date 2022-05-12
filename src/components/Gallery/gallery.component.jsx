import { Grid, Typography, CardMedia, Box } from "@mui/material";
import galleryImage1 from "../../assets/desktop/image-grid-1@2x.jpg";
import galleryImage2 from "../../assets/desktop/image-grid-2@2x.jpg";
import galleryImage3 from "../../assets/desktop/image-grid-3@2x.jpg";
import galleryImagemobile1 from "../../assets/mobile/image-grid-1@2x.jpg";
import galleryImageTablet1 from "../../assets/tablet/image-grid-1@2x.jpg";

const Gallery = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{ width: "80%", margin: "180px auto", marginTop: "100px" }}
    >
      <Grid container item spacing={6} alignItems="center">
        <Grid item md={5} sx={{ backgroundColor: "blue" }}>
          <Box sx={{ backgroundColor: "green" }}>
            <Typography variant="h2">Your day at the gallery</Typography>
            <Typography variant="p">
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </Typography>
          </Box>
        </Grid>

        <Grid item md={7}>
          <CardMedia
            component="img"
            image={galleryImage1}
            alt="gallery image 1"
          />
        </Grid>
      </Grid>

      <Grid spacing={3} container item md={12}>
        <Grid item md={7}>
          <CardMedia
            component="img"
            image={galleryImage2}
            alt="gallery image 2"
          />
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="space-between"
          item
          md={5}
        >
          <Grid item>
            <CardMedia
              component="img"
              image={galleryImage3}
              alt="gallery image 2"
            />
          </Grid>
          <Grid item>
            <Box
              sx={{
                backgroundColor: "#151515",
                color: "white",
                padding: "55px 47px",
              }}
            >
              <Typography variant="h3">Come &amp; be inspired</Typography>
              <Typography variant="p" color="white">
                We’re excited to welcome you to our gallery and see how our
                collections influence you.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Gallery;
