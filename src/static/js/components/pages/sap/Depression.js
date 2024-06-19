import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { depressionList } from "../../Constants"; // Import the depressionList from Constants.js
import { submitDepressionAnswers } from '../../../redux/Depression/DepressionActions';
import './Depression.css'; // Import the CSS file

export default function Depression() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [answers, setAnswers] = useState({});

    const handleRadioChange = (e, index) => {
        setAnswers({
            ...answers,
            [index]: e.target.value,
        });
    };

    const handleSubmit = () => {
        dispatch(submitDepressionAnswers(answers));
        navigate('/thank-you'); // Navigate to a thank you page or any other page
    };

    return (
        <div className="depressionContainer">
            <ol>
                {depressionList.map((questionObj, index) => (
                    <li key={index} className="questionItem">
                        <div className="questionText">{questionObj.question}</div>
                        <RadioGroup
                            aria-label={`radio-buttons-group-${index}`}
                            name={`radio-buttons-group-${index}`}
                            onChange={(e) => handleRadioChange(e, index)}
                        >
                            {questionObj.options.map((option, optionIndex) => (
                                <FormControlLabel
                                    key={optionIndex}
                                    value={option}
                                    control={<Radio className="radioInput" />}
                                    label={option}
                                />
                            ))}
                        </RadioGroup>
                    </li>
                ))}
            </ol>
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={Object.keys(answers).length !== depressionList.length}
            >
                Submit
            </Button>
        </div>
    );
}

