import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";

import htmlDecode from "../../Utils/htmlDecode";

const useStyle = makeStyles(theme => ({
  question: {
    backgroundColor: "lightgreen",
    color: "black",
    verticalAlign: "middle",
    padding: "1rem",
    fontWeight: "bold"
  },

  option: {
    backgroundColor: "white"
  }
}));

interface QuestionsObj {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}

type QuestionProps = {
  details: QuestionsObj;
  handleSelection: any;
};

const Question = ({ details, handleSelection }: QuestionProps) => {
  const classes = useStyle();

  return (
    <div>
      {details ? (
        <React.Fragment>
          <Grid
            container
            justify="center"
            alignItems="center"
            xs={12}
            item
            className={classes.question}
          >
            {htmlDecode(details.question)}
          </Grid>

          <Grid
            container
            justify="center"
            xs={12}
            item
            className={classes.option}
          >
            <RadioGroup
              aria-label="options"
              name="options1"
              onChange={handleSelection}
            >
              <FormControlLabel
                value={htmlDecode(details.correct_answer)}
                control={<Radio />}
                label={htmlDecode(details.correct_answer)}
              />
              {details.incorrect_answers.map((eachAnswer: string) => {
                return (
                  <FormControlLabel
                    value={htmlDecode(eachAnswer)}
                    control={<Radio />}
                    label={htmlDecode(eachAnswer)}
                  />
                );
              })}
            </RadioGroup>
          </Grid>
        </React.Fragment>
      ) : (
        ""
      )}
    </div>
  );
};

export default Question;
