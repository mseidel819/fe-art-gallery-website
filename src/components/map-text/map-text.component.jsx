import { Grid, Typography } from "@mui/material";

const MapText = ({ size }) => {
  return (
    <div style={{ backgroundColor: "#151515" }}>
      <Grid
        container
        spacing={5}
        sx={{
          padding: `${
            size === "desktop" ? "100px" : size === "tablet" ? "50px" : "24px"
          }`,
        }}
      >
        <Grid container item sm={6}>
          <Grid item sm={6}>
            <Typography variant="h2" color="white">
              Our Location
            </Typography>
          </Grid>
        </Grid>

        <Grid container item sm={6}>
          <Grid item xs={12}>
            <Typography variant="h4" color="primary">
              99 King Street
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "20px" }}>
            <Typography variant="p" color="white">
              Newport <br /> RI 02840 <br /> United States of America
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "40px" }}>
            <Typography variant="p" color="white">
              Our newly opened gallery is located near the Edward King House on
              99 King Street, the Modern Art Gallery is free to all visitors and
              open seven days a week from 8am to 9pm.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MapText;
