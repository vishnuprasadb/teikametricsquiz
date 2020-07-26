import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import convertToReadableTime from "../Utils/convertToReadableTime";

import Share from "../Share/index";

const useStyle = makeStyles(theme => ({
  paper: {
    maxWidth: 1000,
    margin: `${theme.spacing(3)}px auto`,
    padding: theme.spacing(5)
  },
  headingText: {
    verticalAlign: "middle",
    color: "blue"
  },

  socialMediaContainer: {
    maxHeight: "1rem"
  }
}));

const FinishIndex: React.FC = () => {
  const classes = useStyle();
  const history = useHistory();

  const [timer, setTimer] = useState(0);
  const [totalQuestions, setTotalQuestion] = useState(0);
  const [correctAnswers, setCorrentAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [percentageSuccess, setPercentageSuccess] = useState(0);

  // When this component loads
  // Retrieve the info from localStorage and diplay as necessary
  useEffect(() => {
    const currentResults = JSON.parse(
      localStorage.getItem("currentResults") || "{}"
    );
    setTimer(currentResults.timer || 0);
    setTotalQuestion(currentResults.totalQuestions);
    setCorrentAnswers(currentResults.correctAnswers);
    setWrongAnswers(currentResults.wrongAnswers);
    setPercentageSuccess(currentResults.percentageSuccess);
  }, []);

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid spacing={2} container xs={12} item justify="center">
          <Grid container xs={12} item justify="center">
            <Typography
              variant="h4"
              display="inline"
              className={classes.headingText}
            >
              Congratulations!!!
            </Typography>
          </Grid>
          <Grid container xs={12} item justify="center">
            {"You have completed the test in " +
              convertToReadableTime(timer).toString()}
          </Grid>
          <Grid container xs={12} item justify="center">
            {"Correct Answers: " +
              correctAnswers.toString() +
              ", " +
              "Wrong Answers: " +
              wrongAnswers.toString()}
          </Grid>
          <Grid container xs={12} item justify="center">
            {"Overall Performance: " + percentageSuccess.toString() + "%"}
          </Grid>
          <Grid container xs={12} item justify="center">
            <Button color="primary" onClick={() => history.push("/allresults")}>
              View all results
            </Button>
          </Grid>
          <Grid container xs={12} item justify="center">
            <Button color="primary" onClick={() => history.push("/")}>
              Take the test again
            </Button>
          </Grid>
          <Grid
            container
            xs={12}
            item
            justify="center"
            className={classes.socialMediaContainer}
          >
            <Typography>Share the results &nbsp;</Typography>
            <Share
              value={
                "Scored " +
                percentageSuccess.toString() +
                "percentage in teikametrics quiz"
              }
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default FinishIndex;
