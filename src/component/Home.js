import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Product from "./Product";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} container direction="row" justify="space-evenly">
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </Grid>
        <Grid item xs={12} container direction="row" justify="space-evenly">
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
