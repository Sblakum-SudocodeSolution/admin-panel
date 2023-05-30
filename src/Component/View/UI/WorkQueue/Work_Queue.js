import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import Sidebar from "../../../Sidebar/Sidebar";
import WorkQueueTable from "./WorkQueueTable";

export default function WorkQueue() {
  return (
    <>
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    WorkQueue
                  </Typography>
                  <Divider sx={{marginBottom:"1.5rem"}} />
                  <WorkQueueTable />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
