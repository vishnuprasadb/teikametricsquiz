import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

const useStyle = makeStyles((theme) => ({
    paper: {
        maxWidth: 1000,
        margin: `${theme.spacing(3)}px auto`,
        padding: theme.spacing(5),
    },

    header: {
        backgroundColor: "lightblue",
    },
    
    headingText: {
        verticalAlign: "middle",
        // marginLeft: "15px",
    },

    instructions: {
        backgroundColor: ""
    },

    instructionsText: {
        verticalAlign: "middle",
        // marginLeft: "15px",
    },

    divider: {
        backgroundColor: "grey",
        width: "100%",
    },

    gridContainer: {
        margin: "0 auto"
    },

    select: {
        width: "10rem"
    }   
}));


const Dash = () => {

    const classes = useStyle();
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
            <Paper className={classes.paper}>
            <Grid 
                container
                spacing={2}
                direction="row"
                alignItems="center"
                justify="center"
                alignContent="center"
                className={classes.gridContainer}
            >
                <Grid container justify="center" xs={12} item className={classes.header}>
                    <Typography variant='h3' display='inline' className={classes.headingText}>
                        Teikametrics Quiz
                    </Typography>
                </Grid>
                <Grid container justify="center" xs={12} item className={classes.instructions}>
                    <Grid container justify="center" xs={12} item>
                    <Typography variant='h4' display='inline' className={classes.instructionsText}>
                        Instructions
                    </Typography>
                    </Grid>
                    <Grid container justify="center" xs={10} item>
                    <Typography variant='h6' display='inline' className={classes.instructionsText}>
                        <ul>
                            <li>Once the test has started don't press back/refresh button.</li>
                            <li>Don't try to conduct any fraud practices.</li>
                        </ul>
                    </Typography>
                    </Grid>
                </Grid>
                <Divider className={classes.divider}/>
                <Grid xs={12} sm={3} item>
                    <TextField
                        id="standard-number"
                        label="Number of questions"
                        type="number"
                        value={numQuestions}
                        onChange={e=>setNumQuestions(parseInt(e.target.value))}
                    />
                </Grid>
                <Grid xs={12} sm={3} item>
                    <FormControl >
                        <InputLabel id="demo-simple-select-label">Difficulty Level</InputLabel>
                        <Select
                            className={classes.select}
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
                </Grid>
                <Grid xs={12} sm={3} item>
                    <FormControl >
                        <InputLabel
                            id="demo-simple-select-label"
                            >Category
                        </InputLabel>
                        <Select
                            className={classes.select}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            onChange={handleChangeCategory}
                        >
                            <MenuItem value={"10"}>General Knowledge</MenuItem>
                            <MenuItem value={"21"}>Sports</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid container xs={12} justify="center" item>
                    <Button
                        variant="contained" 
                        color="primary"
                        onClick={startTest}
                    >Start the Test
                    </Button>
                </Grid>
            </Grid>
            </Paper>
        </div>
    )
}

export default Dash