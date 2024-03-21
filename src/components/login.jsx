import { Button, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthContext } from "../context/authContext";

export const Login = () => {
  const { setToken, token } = useAuthContext();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onsubmit = (e, length) => {
    e.preventDefault();
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let genToken = "";
    for (let i = 0; i < length; i++) {
      genToken += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    console.log(genToken);
    setToken(genToken);
    localStorage.setItem("token", genToken);
    router.push("/admin-dashboard");
  };

  useEffect(() => {
    if (token) {
      router.push("/admin-dashboard");
    }
  }, [token]);

  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
      >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Typography variant="h4" component="h1" align="center">
            Login
          </Typography>
          <form onSubmit={(e) => onsubmit(e, 10)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign In
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};
export default Login;
