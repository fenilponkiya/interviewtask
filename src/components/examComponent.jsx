import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const ExamComponent = () => {
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questionType, setQuestionType] = useState("text");

  const handleAddQuestion = () => {};

  return (
    <Box>
      <Typography variant="h6">Add Question</Typography>
      <FormControl fullWidth>
        <Select
          id="question-type"
          value={questionType}
          onChange={(e) => setQuestionType(e.target.value)}
        >
          <MenuItem value="text">Text</MenuItem>
          <MenuItem value="number">Number</MenuItem>
          <MenuItem value="radio">Radio</MenuItem>
          <MenuItem value="checkbox">Checkbox</MenuItem>
        </Select>
      </FormControl>
      <br />
      <br />
      <TextField
        label="Question"
        id="question"
        fullWidth
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <br />
      <br />

      <TextField
        label="Correct Answer"
        id="correctAnswer"
        fullWidth
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
      />
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={handleAddQuestion}>
        Add
      </Button>
    </Box>
  );
};

export default ExamComponent;
