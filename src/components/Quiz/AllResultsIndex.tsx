import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface AllResultsObj  {
    totalQuestions: number,
    correctAnswers: number,
    timer: number,
    wrongAnswers: number | null,
    percentageSuccess: number | null,
}

const AllResults = () => {
    const history = useHistory();
    const [allResults, setAllResults] = useState<Array<AllResultsObj>>([])

    useEffect(()=>{
        setAllResults(JSON.parse(localStorage.getItem("resultsHistory")||"[]"))
    }, [])

    return (
        <React.Fragment>
            <Button color="primary"
                onClick={()=>history.push('/')}
            >Take the test again
            </Button>
            <TableContainer component={Paper}>
            <Table  aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Questions Asked</TableCell>
                    <TableCell align="right">Correct Answers</TableCell>
                    <TableCell align="right">Wrong Answers</TableCell>
                    <TableCell align="right">% Success</TableCell>
                    <TableCell align="right">Time Taken</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {allResults.map((row) => (
                    <TableRow key={row.timer}>
                    <TableCell component="th" scope="row">
                        {row.totalQuestions}
                    </TableCell>
                    <TableCell align="right">{row.correctAnswers}</TableCell>
                    <TableCell align="right">{row.wrongAnswers}</TableCell>
                    <TableCell align="right">{row.percentageSuccess}</TableCell>
                    <TableCell align="right">{row.timer}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </React.Fragment>
    )
}

export default AllResults;