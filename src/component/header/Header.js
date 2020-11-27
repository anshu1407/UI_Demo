import React from "react";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import { GridList, makeStyles, TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     flexGrow: 1,
  //   },
  padding: {
    padding: "10px",
  },
}));

const images = [
  {
    img: "https://loremflickr.com/150/200/dog",
  },
  {
    img: "https://loremflickr.com/150/200/paris",
  },
  {
    img: "https://loremflickr.com/150/200/kitten",
  },
];
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} direction="row">
        <Grid
          container
          item
          xs={12}
          sm={6}
          justify="center"
          alignItems="center"
        >
          {images.map((image) => (
            <img src={image.img} className={classes.padding} />
          ))}

          {/* <GridList cellHeight={160} cols={4} className={classes.gridList}>
              {images.map((image) => (
                <Image src={image.img} />
              ))}
            </GridList> */}
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={6}
          justify="center"
          alignItems="center"
        >
          {/* <Typography variant="h2"> Text</Typography> */}
          <Typography component="p">
            In some situations you might not be able to use the Typography
            component. Hopefully, you might be able to take advantage of the
            typography keys of the theme.
          </Typography>
          <Typography variant="h4">Single line Grid list </Typography>
          <Typography component="p">
            This example demonstrates a horizontal scrollable single-line grid
            list of images. Horizontally scrolling grid lists are discouraged
            because the scrolling interferes with typical reading patterns,
            affecting comprehension. One notable exception is a
            horizontally-scrolling, single-line grid list of images, such as a
            gallery.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
