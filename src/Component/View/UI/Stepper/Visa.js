import React, { useState } from "react";
import {
  Box,
  Paper,
  Grid,
  styled,
  TextField,
  Button,
  FormLabel,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));

export default function Visa({ prevStep, nextStep }) {
  const [inputVal, setInputVal] = useState({
    visaNumber: "",
    passportNumber: "",
    userName: "",
    dob: "",
    nationality: "",
    visaIssueDate: "",
    visaExpDate: "",
  });

  let {
    visaNumber,
    passportNumber,
    userName,
    dob,
    nationality,
    visaIssueDate,
    visaExpDate,
  } = inputVal;

  const handleChange = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });
  };

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="mt-3">
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Item>
              <h5 className="text-center">ADD VISA DETAILS</h5>
              <Box
                component="form"
                autoComplete="off"
                onSubmit={Continue}
                sx={{ mt: 5 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      label="Visa Number"
                      fullWidth
                      name="visaNumber"
                      value={visaNumber}
                      onChange={() => handleChange()}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Passport Number"
                      name="passportNumber"
                      value={passportNumber}
                      onChange={() => handleChange()}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Name"
                      placeholder="Enter FullName"
                      name="userName"
                      value={userName}
                      onChange={() => handleChange()}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormLabel>Date Of Birth</FormLabel>
                    <TextField
                      required
                      type="date"
                      fullWidth
                      name="dob"
                      value={dob}
                      onChange={() => handleChange()}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} className="mt-4">
                    <TextField
                      required
                      fullWidth
                      label="Nationality"
                      name="nationality"
                      value={nationality}
                      onChange={() => handleChange()}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormLabel>Visa Issue Date</FormLabel>
                    <TextField
                      required
                      fullWidth
                      type="date"
                      name="visaIssueDate"
                      value={visaIssueDate}
                      onChange={() => handleChange()}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormLabel>Visa Expire Date</FormLabel>
                    <TextField
                      required
                      fullWidth
                      type="date"
                      name="visaExpDate"
                      value={visaExpDate}
                      onChange={() => handleChange()}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ p: 2, textAlign: "center" }}>
                  <Button
                    color="secondary"
                    variant="outlined"
                    type="submit"
                    sx={{ mt: 2 }}
                    onClick={Previous}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{ mt: 2, ml: 2 }}
                  >
                    Next
                  </Button>
                </Grid>
              </Box>
            </Item>
          </Grid>

          <Grid item xs={7} md={5}>
            <Item>
              <div className="container">
                <input
                  type="file"
                  className="form-control"
                  onChange={onFileChange}
                  accept=".pdf"
                  required
                />

                {file && (
                  <iframe
                    title="pdfPreview"
                    src={URL.createObjectURL(file)}
                    width="100%"
                    height="500"
                  />
                )}
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
