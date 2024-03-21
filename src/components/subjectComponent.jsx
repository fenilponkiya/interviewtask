import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const SubjectsComponent = () => {
  const [newSubjectName, setNewSubjectName] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [filterText, setFilterText] = useState("");
  console.log(subjects);

  const handleAddSubject = () => {
    if (newSubjectName.trim() !== "") {
      setSubjects((prevSubjects) => [
        ...prevSubjects,
        { id: Math.random(), name: newSubjectName },
      ]);
      setNewSubjectName("");
    }
  };

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(filterText.toLowerCase())
  );
  console.log(subjects);
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography variant="h6">Subjects</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="text"
          placeholder="write subject name"
          value={newSubjectName}
          onChange={(e) => setNewSubjectName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleAddSubject}>
          Add Subject
        </Button>
      </Grid>

      <Grid item xs={12}>
        <TextField
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Filter"
        />
      </Grid>
      <ul>
        {filteredSubjects.map((subject) => (
          <li key={subject.id}>{subject.name}</li>
        ))}
      </ul>
    </Grid>
  );
};

export default SubjectsComponent;
