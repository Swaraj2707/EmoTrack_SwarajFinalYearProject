
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'; // Sad Icon
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral'; // Neutral Icon
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'; // Happy Icon
import { questionsList } from '../Constants';
import { addMood } from '../../redux/questionnaire/QuestionnaireActions';
import '../../../css/styles/pages/Questionnaire.scss';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Questionnaire() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState({ 0: null, 1: null });

  const handleOkayClick = () => {
    const moodScore = (answer[0] + answer[1]) / 2;
    const currentMood = moodScore < 2 ? 1 : moodScore > 2 ? 3 : 2;
    const body = { mood: currentMood };
    dispatch(addMood("user/addmood", body));
    setOpen(false);
    navigate("/pages/relaxing-activities");
  };

  useEffect(() => {
    const shuffledArray = [...questionsList].sort(() => 0.5 - Math.random());
    const ques = shuffledArray.slice(0, 2);
    setQuestions(ques);
  }, []);

  const handleRadioCheck = (e, index) => {
    setAnswer((prev) => ({
      ...prev,
      [index]: Number(e.target.value),
    }));
  };

  const submitEnable = () => {
    return answer[0] !== null && answer[1] !== null;
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
      className="dialog"
    >
      <DialogTitle>{"Help us know your mood better"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <Box className="moodIcons">
            <SentimentVeryDissatisfiedIcon className="sad" />
            <SentimentNeutralIcon className="neutral" />
            <SentimentSatisfiedAltIcon className="happy" />
          </Box>
          {/* <FormControl>
            {questions.map((obj, index) => (
              <React.Fragment key={`question-${obj.id}`}>
                <FormLabel id={`question-${obj.id}`}>{obj.question}</FormLabel>
                <RadioGroup row aria-labelledby={`question-${obj.id}`} name={`question-${obj.id}`} onChange={(e) => handleRadioCheck(e, index)}>
                  {obj.options.map((option, optionIndex) => (
                    <FormControlLabel key={optionIndex} value={optionIndex + 1} control={<Radio />} label={option} />
                  ))}
                </RadioGroup>
              </React.Fragment>
            ))}
          </FormControl> */}
          {questions?.length > 0 && (
            <FormControl>
              {questions.map((obj, index) => (
                <React.Fragment key={`question-${obj.id}`}>
                  <FormLabel id={`question-${obj.id}`}>
                    {obj.question}
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby={`question-${obj.id}`}
                    name={`question-${obj.id}`}
                    onChange={(e) => handleRadioCheck(e, index)}
                  >
                    {obj.options.map((option, optionIndex) => (
                      <FormControlLabel
                        key={optionIndex}
                        value={optionIndex + 1}
                        control={<Radio />}
                        label={option}
                      />
                    ))}
                  </RadioGroup>
                </React.Fragment>
              ))}
            </FormControl>
          )}
        </DialogContentText>
      </DialogContent>
      {submitEnable() && (
        <Typography
          variant="body"
          className="modalInfo"
          sx={{ flexGrow: 1, color: "#000" }}
        >
          Thanks for answering, enjoy the break with some relaxing activities.
        </Typography>
      )}
      <DialogActions>
        <Button
          variant="contained"
          onClick={handleOkayClick}
          disabled={!submitEnable()}
        >
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
}
