import { TextField, Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Typography>Subjects</Typography>
      <TextField
        type="text"
        placeholder="New Subject"
        value={newSubject}
        onChange={(e) => setNewSubject(e.target.value)}
      />
      <Button onClick={handleAddSubject}>Add Subject</Button>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
