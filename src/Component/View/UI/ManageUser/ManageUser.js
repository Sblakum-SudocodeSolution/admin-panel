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
import UserList from "./UserList";

export default function ManageUser() {
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
                    Manage User
                  </Typography>
                  <Divider sx={{ marginBottom: "1.5rem" }} />
                  <UserList />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
