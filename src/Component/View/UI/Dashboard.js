import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import Sidebar from "../../Sidebar/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card sx={{ height: 140 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dashboard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Welcome To Dashboard
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
