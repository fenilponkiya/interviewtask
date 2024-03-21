import { Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import SubjectsComponent from "./subjectComponent";
import { useAuthContext } from "../context/authContext";
import { useRouter } from "next/router";
import ExamComponent from "./examComponent";
import ExamView from "./ExamView";

const DashBoardComponent = () => {
  const { token } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, [token]);
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <Grid container sx={{ display: "flex" }}>
        <Grid item xs={12} md={4}>
          <SubjectsComponent />
        </Grid>
        <Grid item xs={12} md={4}>
          <ExamComponent />
        </Grid>

        <Grid item xs={12} md={4} textAlign={"right"}>
          <Button variant="contained" onClick={logout}>
            Logout
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <ExamView />
        </Grid>
      </Grid>
    </>
  );
};

export default DashBoardComponent;
