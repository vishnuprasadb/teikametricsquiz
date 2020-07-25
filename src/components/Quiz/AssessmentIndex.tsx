import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";

import QuizService from '../../services/QuizService';
import Question from './Assessment/Question'

interface QuestionsObj  {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: Array<string>
}

const AssessmentIndex: React.FC = () => {
    const history = useHistory();

    // States required to handle the diplay of questions
    const [questions, setQuestions] = useState<Array<QuestionsObj>>([])
    const [loading, setLoading] = useState(true)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [totalQuestions, setTotalQuestion] = useState(0)
    const [correctAnswers, setCorrentAnswers] = useState(0)

    const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState("")
    const [ansGiven, setAnsGiven] = useState("")

    const [finished, setFinished] = useState(false)
    
    //State to keep track of the interview timer
    const [timer, changeTimer] = useState(0)

    // Load API when the componentDidMount.
    useEffect (()=>{
        localStorage.setItem("currentResults", JSON.stringify({}))
        const urlParams = new URLSearchParams(window.location.search)

        const numQuestions = urlParams.get("numQuestions")
        const category = urlParams.get("category")
        const difficulty = urlParams.get("difficulty")

        QuizService.getQuestions(numQuestions||undefined, category||undefined, difficulty||undefined)
        .then(res=> {
            setQuestions(res.data.results)
            setTotalQuestion(res.data.results.length-1)
            setLoading(false)
            setInterval(()=>changeTimer(prevTimer=>prevTimer+1), 1000)
            setCurrentQuestionIndex(0)
            setCurrentCorrectAnswer(res.data.results[0].correct_answer)
        })
    }, [])

    useEffect(()=>{
        if (currentQuestionIndex > 0){
            if (questions[currentQuestionIndex]){
                setCurrentCorrectAnswer(questions[currentQuestionIndex].correct_answer)
            }
        }
        
    },[currentQuestionIndex])

    useEffect(()=>{
        if (finished){
            history.push("/finish")
            const realTotalQues = totalQuestions+1
            const finalResults = {
                totalQuestions: realTotalQues,
                correctAnswers:correctAnswers,
                timer:timer,
                wrongAnswers: realTotalQues - correctAnswers,
                percentageSuccess: Math.round(correctAnswers/realTotalQues * 100)
            }
            localStorage.setItem("currentResults", JSON.stringify(finalResults))
            let resultsHistory=JSON.parse(localStorage.getItem("resultsHistory")||"[]")
            resultsHistory.push(finalResults)
            localStorage.setItem("resultsHistory", JSON.stringify(resultsHistory))
        }
    }, [finished])

    const handleNextClick = () => {
        setCurrentQuestionIndex(prevIndex=>prevIndex+1)
        if (currentCorrectAnswer === ansGiven){
            setCorrentAnswers(prevCorrectAnswers => prevCorrectAnswers+1)
        }
        setAnsGiven("")
        if (currentQuestionIndex === totalQuestions){
            setFinished(true)
        }
    }

    const handleSelection = (event:any) => {
        setAnsGiven(event.target.value)
        console.log(event.target.value)
    }
    return (
        <div>
            {
                loading ? 
                "Loading Questions":
                (
                    <React.Fragment>
                        <Question
                            details={questions[currentQuestionIndex]}
                            handleSelection={handleSelection}
                        />
                        <Button color="primary"
                            onClick={handleNextClick}
                        >{
                            currentQuestionIndex === totalQuestions ? "Finish" : "Next Question"
                            }
                        </Button>
                    </React.Fragment>
                )
            }
        </div>
    )
}

export default AssessmentIndex