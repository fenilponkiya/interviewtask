import React, { useEffect } from "react";
import { useAuthContext } from "../context/authContext";
import { useRouter } from "next/router";
import { Box, Button } from "@mui/material";

const Home = () => {
  const { token } = useAuthContext();
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <Box sx={{ width: "100%", textAlign: "right" }}>
      <Button variant="contained" onClick={logout}>
        Logout
      </Button>
    </Box>
  );
};

export default Home;
