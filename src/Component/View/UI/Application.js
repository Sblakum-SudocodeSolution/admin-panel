import React from "react";
import { Box, Grid, CardContent, Typography } from "@mui/material";
import Sidebar from "../../Sidebar/Sidebar";
import Stepper from "./Stepper/Stepper";

export default function Application() {
  return (
    <>
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Application
                </Typography>

                <Stepper />
              </CardContent>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
