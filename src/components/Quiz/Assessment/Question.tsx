import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

type QuestionProps = {
    details:any,
    handleSelection: any,
}
const Question = ({
    details,
    handleSelection
    }:QuestionProps) => {
        // console.log(ques)
    return (
        <div>
            {
                details ?
                (
                    <FormControl component="fieldset">
                    <FormLabel component="legend">{details.question}</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" onChange={handleSelection}>
                        <FormControlLabel 
                            value={details.correct_answer} 
                            control={<Radio />} 
                            label={details.correct_answer} 
                        />
                        {details.incorrect_answers.map(
                            (eachAnswer:any)=>{
                                return <FormControlLabel
                                            value={eachAnswer}
                                            control={<Radio />}
                                            label={eachAnswer}
                                        />
                            }
                        )}
                    </RadioGroup>
                    </FormControl>
                ):
                ""
            }
        </div>
    )
}

export default Question;