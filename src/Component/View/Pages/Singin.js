import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const theme = createTheme();

export default function Signin() {
  let navigate = useNavigate();

  const [inputVal, setInputVal] = React.useState({
    userName: "",
    userPassword: "",
  });
  const [errMsg, setErrMsg] = React.useState("");

  let { userName, userPassword } = inputVal;

  const handleChange = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://alecapi.sudocodesolutions.com/api/user/login", inputVal)
      .then((r) => {
        localStorage.setItem("loggedinToken", r.data.value.token);
        setInputVal({ userName: "", userPassword: "" });
        navigate("/dashboard");
      })
      .catch((err) => {
        setErrMsg("Please enter valid UserName or Password*");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <h6 style={{ color: "red" }}>{errMsg}</h6>
          <Box
            component="form"
            onSubmit={handleSubmit}
            autoComplete="off"
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="UserName"
              name="userName"
              value={userName}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="userPassword"
              label="Password"
              type="password"
              value={userPassword}
              onChange={(e) => handleChange(e)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid item xs={12}>
              <Grid
                item
                container
                direction="column"
                alignItems="center"
                xs={12}
              >
                <Typography
                  component={Link}
                  to="/signup"
                  variant="subtitle1"
                  sx={{ textDecoration: "none" }}
                >
                  New User? REGISTER
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
