import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";

const ExamView = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Exam
        </Typography>
        <Box>
          <Box>
            <Typography variant="h6" component="h3">
              Question
            </Typography>
          </Box>
        </Box>
        <Box mb={1}>
          <Button sx={{ mr: 1 }} variant="outlined">
            Previous
          </Button>
          <Button variant="contained">Next</Button>
        </Box>
        <Box>
          <Typography variant="body1">Percentage:%</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExamView;
