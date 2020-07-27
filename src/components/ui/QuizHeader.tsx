import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles(theme => ({
  header: {
    backgroundColor: "lightblue"
  },

  headingText: {
    verticalAlign: "middle"
  },

  gridContainer: {
    margin: "0 auto",
    backgroundColor: "lightblue"
  }
}));

const Dash = () => {
  const classes = useStyle();

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        className={classes.gridContainer}
      >
        <Grid container justify="center" className={classes.header}>
          <Typography
            variant="h3"
            display="inline"
            className={classes.headingText}
          >
            Teikametrics Quiz
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dash;
