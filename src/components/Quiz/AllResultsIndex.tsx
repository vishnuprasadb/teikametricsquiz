import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import classes from "*.module.css";

import convertToReadableTime from "../Utils/convertToReadableTime";

interface AllResultsObj {
  totalQuestions: number;
  correctAnswers: number;
  timer: number;
  wrongAnswers: number | null;
  percentageSuccess: number | null;
}

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 500
  }
});

const AllResults = () => {
  const classes = useStyles();
  const history = useHistory();
  const [allResults, setAllResults] = useState<Array<AllResultsObj>>([]);

  useEffect(() => {
    setAllResults(JSON.parse(localStorage.getItem("resultsHistory") || "[]"));
  }, []);

  return (
    <React.Fragment>
      <Button color="primary" onClick={() => history.push("/")}>
        Take the test again
      </Button>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Correct Answers</TableCell>
                <TableCell>Wrong Answers</TableCell>
                <TableCell>Performance</TableCell>
                <TableCell>Time Taken</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allResults.map(row => (
                <TableRow key={row.timer}>
                  <TableCell>{row.correctAnswers}</TableCell>
                  <TableCell>{row.wrongAnswers}</TableCell>
                  <TableCell>{row.percentageSuccess}</TableCell>
                  <TableCell>{convertToReadableTime(row.timer)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </React.Fragment>
  );
};

export default AllResults;
