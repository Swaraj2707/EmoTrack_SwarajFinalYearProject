// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Button from '@mui/material/Button';
// import { depressionList } from "../../Constants"; // Import the depressionList from Constants.js
// import { submitDepressionAnswers } from '../../../redux/Depression/DepressionActions';
// import './Depression.css'; // Import the CSS file

// export default function Depression() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [answers, setAnswers] = useState({});

//     const handleRadioChange = (e, index) => {
//         setAnswers({
//             ...answers,
//             [index]: e.target.value,
//         });
//     };

//     const handleSubmit = () => {
//         dispatch(submitDepressionAnswers(answers));
//         navigate('/thank-you'); // Navigate to a thank you page or any other page
//     };

//     return (
//         <div className="depressionContainer">
//             <ol>
//                 {depressionList.map((questionObj, index) => (
//                     <li key={index} className="questionItem">
//                         <div className="questionText">{questionObj.question}</div>
//                         <RadioGroup
//                             aria-label={`radio-buttons-group-${index}`}
//                             name={`radio-buttons-group-${index}`}
//                             onChange={(e) => handleRadioChange(e, index)}
//                         >
//                             {questionObj.options.map((option, optionIndex) => (
//                                 <FormControlLabel
//                                     key={optionIndex}
//                                     value={option}
//                                     control={<Radio className="radioInput" />}
//                                     label={option}
//                                 />
//                             ))}
//                         </RadioGroup>
//                     </li>
//                 ))}
//             </ol>
//             <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleSubmit}
//                 disabled={Object.keys(answers).length !== depressionList.length}
//             >
//                 Submit
//             </Button>
//         </div>
//     );
// }


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { depressionList } from "../../Constants"; // Import the depressionList from Constants.js
import { submitDepressionAnswers } from '../../../redux/Depression/DepressionActions';
import './Depression.css'; // Import the CSS file

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Depression() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [answers, setAnswers] = useState({});
    const [openResultModal, setOpenResultModal] = useState(false);
    const [openThankYouModal, setOpenThankYouModal] = useState(false);
    const [result, setResult] = useState('');
    const [score, setScore] = useState(0);

    const handleRadioChange = (e, index) => {
        setAnswers({
            ...answers,
            [index]: e.target.value,
        });
    };

    const handleSubmit = () => {
        const totalScore = Object.values(answers).reduce((acc, answer) => acc + parseInt(answer, 10), 0);
        setScore(totalScore);
        let depressionResult = '';

        if (totalScore >= 0 && totalScore <= 4) {
            depressionResult = 'No depression';
        } else if (totalScore >= 5 && totalScore <= 9) {
            depressionResult = 'Mild depression';
        } else if (totalScore >= 10 && totalScore <= 14) {
            depressionResult = 'Moderate depression';
        } else if (totalScore >= 15 && totalScore <= 19) {
            depressionResult = 'Moderately severe depression';
        } else if (totalScore >= 20) {
            depressionResult = 'Severe depression';
        }

        setResult(depressionResult);
        setOpenResultModal(true);
        dispatch(submitDepressionAnswers(answers));
    };

    const handleCloseResultModal = () => {
        setOpenResultModal(false);
        setOpenThankYouModal(true);
    };

    const handleCloseThankYouModal = () => {
        setOpenThankYouModal(false);
        navigate('/pages/sap');
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
                                    value={optionIndex.toString()}
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
            <Modal
                open={openResultModal}
                onClose={handleCloseResultModal}
                aria-labelledby="depression-result-title"
                aria-describedby="depression-result-description"
            >
                <Box sx={modalStyle}>
                    <h2 id="depression-result-title">Depression Result</h2>
                    <p id="depression-result-description">{`Score: ${score} - ${result}`}</p>
                    <Button variant="contained" color="primary" onClick={handleCloseResultModal}>
                        Close
                    </Button>
                </Box>
            </Modal>
            <Modal
                open={openThankYouModal}
                onClose={handleCloseThankYouModal}
                aria-labelledby="thank-you-title"
                aria-describedby="thank-you-description"
            >
                <Box sx={modalStyle}>
                    <h2 id="thank-you-title">Thank You!</h2>
                    <p id="thank-you-description">Thank you for completing the questionnaire.</p>
                    <Button variant="contained" color="primary" onClick={handleCloseThankYouModal}>
                        Close
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
