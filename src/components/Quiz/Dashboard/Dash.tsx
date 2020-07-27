import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Instrcutions from "./Instrcutions";
import StartForm from "./StartForm";

const useStyle = makeStyles(theme => ({
  header: {
    backgroundColor: "lightblue"
  },

  headingText: {
    verticalAlign: "middle"
  },

  instructions: {
    backgroundColor: ""
  },

  instructionsText: {
    verticalAlign: "middle"
  },

  gridContainer: {
    margin: "0 auto"
  }
}));

const Dash = () => {
  const classes = useStyle();
  const history = useHistory();

  const [numQuestions, setNumQuestions] = useState(10);
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [category, setCatergory] = useState("");

  const handleQuestionsChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setNumQuestions(parseInt(event.target.value as string));
  };

  const handleDifficultLevelChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setDifficultyLevel(event.target.value as string);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setCatergory(event.target.value as string);
  };

  const startTest = (event: React.ChangeEvent<{ value: unknown }>) => {
    let queryString: string = "?numQuestions=" + numQuestions.toString();
    if (category) {
      queryString += "&category=" + category;
    }
    if (difficultyLevel) {
      queryString += "&difficulty=" + difficultyLevel;
    }
    history.push(`/test${queryString}`);
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        alignContent="center"
        className={classes.gridContainer}
      >
        <Grid
          container
          justify="center"
          xs={12}
          sm={6}
          item
          className={classes.instructions}
        >
          <Grid container xs={12} item>
            &nbsp;
          </Grid>
          <Instrcutions />
        </Grid>

        <Grid container spacing={2} xs={12} sm={6} item>
          <StartForm
            {...{
              numQuestions,
              handleQuestionsChange,
              difficultyLevel,
              handleDifficultLevelChange,
              category,
              handleCategoryChange,
              startTest
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dash;
