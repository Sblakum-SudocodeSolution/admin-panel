import { useState } from "react";
import {
  Grid,
  Box,
  Paper,
  styled,
  TextField,
  FormLabel,
  Button,
} from "@mui/material";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));

export default function Passport({ nextStep }) {
  const [inputVal, setInputVal] = useState({
    passportNumber: "",
    userName: "",
    dob: "",
    birthPlace: "",
    issuePlace: "",
    nationality: "",
    doi: "",
    doe: "",
  });

  let {
    passportNumber,
    userName,
    dob,
    birthPlace,
    issuePlace,
    nationality,
    doi,
    doe,
  } = inputVal;

  const handleChange = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });
  };

  const Continue = (e) => {
    e.preventDefault();

    axios
      .post("https://642141a734d6cd4ebd6e8cdc.mockapi.io/passport", inputVal)
      .then(() =>
        setInputVal({
          passportNumber: "",
          userName: "",
          dob: "",
          birthPlace: "",
          issuePlace: "",
          nationality: "",
          doi: "",
          doe: "",
        })
      );

    nextStep();
  };

  const [file, setFile] = useState(null);

  const onPdfFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="mt-3">
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Item>
              <h5 className="text-center">ADD PASSPORT DETAILS</h5>
              <Box
                component="form"
                autoComplete="off"
                onSubmit={Continue}
                sx={{ mt: 5 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Passport Number"
                      name="passportNumber"
                      value={passportNumber}
                      onChange={(e) => handleChange(e)}
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
                      onChange={(e) => handleChange(e)}
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
                      onChange={(e) => handleChange(e)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} className="mt-4">
                    <TextField
                    required
                      fullWidth
                      label=" Place Of Birth"
                      name="birthPlace"
                      value={birthPlace}
                      onChange={(e) => handleChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                    required
                      fullWidth
                      label="Place Of Issue"
                      name="issuePlace"
                      value={issuePlace}
                      onChange={(e) => handleChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                    required
                      fullWidth
                      label=" Nationality"
                      name="nationality"
                      value={nationality}
                      onChange={(e) => handleChange(e)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormLabel>Date Of Issue</FormLabel>
                    <TextField
                    required
                      fullWidth
                      type="date"
                      name="doi"
                      value={doi}
                      onChange={(e) => handleChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormLabel>Date Of Expire</FormLabel>
                    <TextField
                    required
                      fullWidth
                      type="date"
                      name="doe"
                      value={doe}
                      onChange={(e) => handleChange(e)}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ p: 1, textAlign: "center" }}>
                  <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
                    Next
                  </Button>
                </Grid>
              </Box>
            </Item>
          </Grid>

          <Grid item xs={12} md={5}>
            <Item>
              <div className="container">
                <input
                  type="file"
                  className="form-control"
                  onChange={onPdfFileChange}
                  accept=".pdf"
                />

                {file && (
                  <iframe
                    title="pdfPreview"
                    src={URL.createObjectURL(file)}
                    width="100%"
                    height="500vh"
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
