import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles(theme => ({
  instructions: {
    backgroundColor: ""
  },

  instructionsText: {
    verticalAlign: "middle"
  }
}));

const Instructions = () => {
  const classes = useStyle();

  return (
    <React.Fragment>
      <Grid container justify="center" xs={12} item>
        <Typography
          variant="h4"
          display="inline"
          className={classes.instructionsText}
        >
          Instructions
        </Typography>
      </Grid>
      <Grid container justify="center" xs={10} item>
        <Typography
          variant="h6"
          display="inline"
          className={classes.instructionsText}
        >
          <ul>
            <li>Once the test has started don't press back/refresh button.</li>
            <li>Don't try to conduct any fraud practices.</li>
          </ul>
        </Typography>
      </Grid>
    </React.Fragment>
  );
};

export default Instructions;
