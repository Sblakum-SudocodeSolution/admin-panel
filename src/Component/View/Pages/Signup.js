import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Select, FormControl, MenuItem, InputLabel } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const theme = createTheme();

export default function Signup() {
  const [inputData, setInputData] = React.useState({
    userType: "",
    userName: "",
    firstName: "",
    lastName: "",
    userEmail: "",
    companyName: "",
    userPassword: "",
  });

  let {
    userType,
    userName,
    firstName,
    lastName,
    userEmail,
    companyName,
    userPassword,
  } = inputData;

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://alecapi.sudocodesolutions.com/api/user/signup", inputData)
      .then((r) => {
        setInputData({
          userType: "",
          userName: "",
          firstName: "",
          lastName: "",
          userEmail: "",
          companyName: "",
          userPassword: "",
        });
        localStorage.setItem("Signup_Data", JSON.stringify(inputData));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
            autoComplete="off"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    User Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="userType"
                    value={userType}
                    label="User Type"
                    onChange={(e) => handleChange(e)}
                    required
                  >
                    <MenuItem value="1">internal user</MenuItem>
                    <MenuItem value="2">External User</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="User Name"
                  name="userName"
                  value={userName}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  label="First Name"
                  value={firstName}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="userEmail"
                  value={userEmail}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="companyName"
                  label="Compony Name"
                  value={companyName}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="userPassword"
                  label="Password"
                  type="password"
                  value={userPassword}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
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
                  to="/"
                  variant="subtitle1"
                  sx={{ textDecoration: "none" }}
                >
                  Already have an account? LOGIN
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
