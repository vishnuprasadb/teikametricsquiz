import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from "@material-ui/core/Button";

const Dash = () => {
    const history = useHistory();
    
    const [numQuestions, setNumQuestions] = useState(10)
    const [difficultyLevel, setDifficultyLevel] = useState("")
    const [category, setCatergory] = useState("")

    const handleChange = (event: React.ChangeEvent<{value:unknown}>) => {
        setDifficultyLevel(event.target.value as string)
    }

    const handleChangeCategory = (event: React.ChangeEvent<{value:unknown}>) => {
        setCatergory(event.target.value as string)
    }

    const startTest = ()=>{
        let queryString:string = "?numQuestions="+numQuestions.toString()
        if (category){
            queryString += "&category="+category
        }
        if (difficultyLevel){
            queryString += "&difficulty="+difficultyLevel
        }
        history.push(`/test${queryString}`)
    }

    return (
        <div>
            <TextField
                id="standard-number"
                label="Number of questions"
                type="number"
                value={numQuestions}
                onChange={e=>setNumQuestions(parseInt(e.target.value))}
            />
            <br/>
            <FormControl >
                <InputLabel id="demo-simple-select-label">Difficulty Level</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={difficultyLevel}
                onChange={handleChange}
                >
                <MenuItem value={"easy"}>Easy</MenuItem>
                <MenuItem value={"medium"}>Medium</MenuItem>
                <MenuItem value={"hard"}>Hard</MenuItem>
                </Select>
            </FormControl>
            <br/>
            <FormControl >
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                onChange={handleChangeCategory}
                >
                <MenuItem value={"10"}>General Knowledge</MenuItem>
                <MenuItem value={"21"}>Sports</MenuItem>
                </Select>
            </FormControl>

            <Button color="primary"
                onClick={startTest}
            >Start the Test
            </Button>
        </div>
    )
}

export default Dash