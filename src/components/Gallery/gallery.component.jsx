import { Grid, Typography, CardMedia } from "@mui/material";
import galleryImage1 from "../../assets/desktop/image-grid-1@2x.jpg";
import galleryImage2 from "../../assets/desktop/image-grid-2@2x.jpg";
import galleryImage3 from "../../assets/desktop/image-grid-3@2x.jpg";

const Gallery = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{ width: "80%", margin: "0 auto", marginTop: "100px" }}
    >
      <Grid container item spacing={6} alignItems="center">
        <Grid item md={5}>
          <Typography variant="h2">Your day at the gallery</Typography>
          <Typography variant="p">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </Typography>
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
          <Grid
            item
            sx={{
              color: "white",
              backgroundColor: "#151515",
              padding: "55px 47px",
            }}
            alignItems="center"
          >
            <Typography variant="h3">Come &amp; be inspired</Typography>
            <Typography variant="p" color="white">
              We’re excited to welcome you to our gallery and see how our
              collections influence you.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Gallery;
