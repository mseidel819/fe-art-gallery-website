import { Container, Typography, Grid, Link } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = ({ bkgColor, color, hoverColor, size }) => {
  const margins =
    size === "desktop" ? "80%" : size === "tablet" ? "95%" : "95%";

  return (
    <Container
      maxWidth="100%"
      sx={{
        backgroundColor: `${bkgColor}`,
        // height: "244px",
        padding: "80px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        maxWidth={margins}
        spacing={4}
        justifyContent="space-between"
      >
        <Grid container item lg={10} sm={8}>
          <Grid item lg={4} sm={6} xs={12}>
            <Typography color={color} variant="h4">
              Modern <br />
              Art Gallery
            </Typography>
          </Grid>

          <Grid item lg={6} sm={6} xs={12}>
            <Typography color={color} variant="p" fontSize="18px">
              The Modern Art Gallery is free to all visitors and open seven days
              a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          color={color}
          justifyContent={size === "mobile" ? "left" : "right"}
          lg={2}
          sm={4}
          xs={12}
        >
          <Link href="#" aria-label="facebook">
            <FacebookIcon
              sx={{ color: `${color}`, "&:hover": { color: `${hoverColor}` } }}
            />
          </Link>
          <Link href="#" aria-label="instagram" sx={{ margin: "0 20px" }}>
            <InstagramIcon
              sx={{ color: `${color}`, "&:hover": { color: `${hoverColor}` } }}
            />
          </Link>
          <Link href="#" aria-label="twitter">
            <TwitterIcon
              sx={{ color: `${color}`, "&:hover": { color: `${hoverColor}` } }}
            />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
