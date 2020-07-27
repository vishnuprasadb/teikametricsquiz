import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

const useStyle = makeStyles(theme => ({
  formWidth: {
    width: "12rem"
  }
}));

const StartForm = (props: any) => {
  const classes = useStyle();
  const {
    numQuestions,
    handleQuestionsChange,
    difficultyLevel,
    handleDifficultLevelChange,
    category,
    handleCategoryChange,
    startTest
  } = props;

  return (
    <React.Fragment>
      <Grid container xs={12} item>
        &nbsp;
      </Grid>
      <Grid container justify="center" xs={12} item>
        <TextField
          id="standard-number"
          label="Number of questions"
          type="number"
          value={numQuestions}
          onChange={handleQuestionsChange}
          className={classes.formWidth}
        />
      </Grid>
      <Grid container justify="center" xs={12} item>
        <FormControl>
          <InputLabel id="demo-simple-select-label">
            Difficulty Level
          </InputLabel>
          <Select
            className={classes.formWidth}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={difficultyLevel}
            onChange={handleDifficultLevelChange}
          >
            <MenuItem value={"easy"}>Easy</MenuItem>
            <MenuItem value={"medium"}>Medium</MenuItem>
            <MenuItem value={"hard"}>Hard</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid container justify="center" xs={12} item>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            className={classes.formWidth}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            onChange={handleCategoryChange}
          >
            <MenuItem value={"10"}>General Knowledge</MenuItem>
            <MenuItem value={"21"}>Sports</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid container xs={12} item>
        &nbsp;
      </Grid>
      <Grid container justify="center" xs={12} item>
        <Button variant="contained" color="primary" onClick={startTest}>
          Start the Test
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default StartForm;
