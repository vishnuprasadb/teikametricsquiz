import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";

import convertToReadableTime from '../Utils/convertToReadableTime'

import Share from '../Share/index'

const FinishIndex: React.FC = () => {
    const history = useHistory();
    
    const [timer, setTimer] = useState(0)
    const [totalQuestions, setTotalQuestion] = useState(0)
    const [correctAnswers, setCorrentAnswers] = useState(0)
    const [wrongAnswers, setWrongAnswers] = useState(0)
    const [percentageSuccess, setPercentageSuccess] = useState(0)

    // When this component loads
    // Retrieve the info from localStorage and diplay as necessary
    useEffect(()=>{
        const currentResults = JSON.parse(localStorage.getItem("currentResults")||"{}")
        setTimer(currentResults.timer||0)
        setTotalQuestion(currentResults.totalQuestions)
        setCorrentAnswers(currentResults.correctAnswers)
        setWrongAnswers(currentResults.wrongAnswers)
        setPercentageSuccess(currentResults.percentageSuccess)
    }, [])
    return (
        <div>
            Quiz Finish Page<br/>
            Congratulations!!!<br/>
            {
                "You have completed the test in " + convertToReadableTime(timer).toString()
            }
            <br/>
            {
                "Correct Answers: " + correctAnswers.toString() + "," + "Wrong Answers: " + (wrongAnswers).toString()
            }
            <br/>
            {
                "Percentage Success: " + percentageSuccess.toString() + "%"
            }
            <Button color="primary"
                onClick={()=>history.push('/allresults/')}
            >View all results
            </Button>

            <Button color="primary"
                onClick={()=>history.push('/')}
            >Take the test again
            </Button>

            <Share />
        </div>
    )
}

export default FinishIndex