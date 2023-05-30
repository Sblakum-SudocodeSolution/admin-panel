import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PersonalDetails from "./PersonalDetails";
import { CardContent, Divider, Typography } from "@mui/material";
import Sidebar from "../../Sidebar/Sidebar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Profile() {
  return (
    <>
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
          <Grid container>
            <Grid item xs={12}>
              <CardContent>
                <Item>
                  <Typography
                    tag="h6"
                    sx={{ padding: "1rem", textAlign: "start" }}
                  >
                    Personal Information
                  </Typography>
                  <Divider />
                  <PersonalDetails />
                </Item>
              </CardContent>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
