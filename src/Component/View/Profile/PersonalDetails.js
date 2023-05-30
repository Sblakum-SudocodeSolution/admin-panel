import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box } from "@mui/material";

export default function ComponyInfo() {
  const componyData = [
    {
      id: 1,
      componyName: "XYZ",
      address1: "Nehru nagar",
      address2: "Nehru nagar",
      city: "Ahmedabad",
      state: "Gujrat",
      country: "India",
      zipcode: "380009",
    },
  ];

  const [perDetData, setPerDetData] = useState(componyData);

  const [editData, setEditData] = useState({
    componyName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
    isEditMode: false,
    id: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const changeEditVal = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const onEditClick = (id) => {
    const localPersonalData = [...perDetData];
    for (var ind = 0; ind < localPersonalData.length; ind++) {
      if (id === localPersonalData[ind].id) {
        localPersonalData[ind].isEditMode = true;
        setEditData({
          componyName: localPersonalData[ind].componyName,
          address1: localPersonalData[ind].address1,
          address2: localPersonalData[ind].address2,
          city: localPersonalData[ind].city,
          state: localPersonalData[ind].state,
          country: localPersonalData[ind].country,
          zipcode: localPersonalData[ind].zipcode,
          id: localPersonalData[ind].id,
        });
      }
    }
    setPerDetData(localPersonalData);
  };

  return (
    <>
      {perDetData.map((item, key) => {
        return item.id === editData.id ? (
          <>
            <Box
              component="form"
              autoComplete="off"
              onSubmit={handleSubmit}
              sx={{ margin: 0 }}
            >
              <CardHeader
                action={
                  <IconButton
                    aria-label="settings"
                    style={{ cursor: "pointer" }}
                  >
                    <SaveIcon style={{ cursor: "pointer" }} />
                  </IconButton>
                }
              />
              <CardContent>
                <List>
                  <ListItem>
                    <TextField
                      sx={{ width: "120vh" }}
                      label="Compony Name"
                      variant="standard"
                      placeholder="Enter Compony Name"
                      type="text"
                      autoFocus
                      name="componyName"
                      onChange={(e) => {
                        changeEditVal(e);
                      }}
                      value={editData.componyName}
                      required
                    />
                  </ListItem>
                  <ListItem sx={{ paddingTop: "5vh" }}>
                    <TextField
                      sx={{ width: "50vh" }}
                      variant="standard"
                      label="Address1"
                      type="text"
                      name="address1"
                      placeholder="Enter Address1"
                      onChange={(e) => {
                        changeEditVal(e);
                      }}
                      value={editData.address1}
                      required
                    />

                    <TextField
                      sx={{ width: "50vh", marginLeft: "20vh" }}
                      label="Address2 (Optional)"
                      variant="standard"
                      type="text"
                      name="address2"
                      placeholder="Enter Address2"
                      onChange={(e) => {
                        changeEditVal(e);
                      }}
                      value={editData.address2}
                    />
                  </ListItem>
                  <ListItem sx={{ paddingTop: "5vh" }}>
                    <TextField
                      sx={{ width: "50vh" }}
                      label="City"
                      variant="standard"
                      type="text"
                      name="city"
                      placeholder="Enter City"
                      onChange={(e) => {
                        changeEditVal(e);
                      }}
                      value={editData.city}
                      required
                    />

                    <TextField
                      sx={{ width: "50vh", marginLeft: "20vh" }}
                      label="State"
                      variant="standard"
                      type="text"
                      name="state"
                      placeholder="Enter State"
                      onChange={(e) => {
                        changeEditVal(e);
                      }}
                      value={editData.state}
                      required
                    />
                  </ListItem>
                  <ListItem sx={{ paddingTop: "5vh" }}>
                    <TextField
                      required
                      sx={{ width: "50vh" }}
                      label="Contry"
                      variant="standard"
                      type="text"
                      name="country"
                      placeholder="Enter Country"
                      onChange={(e) => {
                        changeEditVal(e);
                      }}
                      value={editData.country}
                    />

                    <TextField
                      sx={{ width: "50vh", marginLeft: "20vh" }}
                      label="Zipcode"
                      variant="standard"
                      type="text"
                      name="zipcode"
                      placeholder="Enter Zipcode"
                      onChange={(e) => {
                        changeEditVal(e);
                      }}
                      value={editData.zipcode}
                      required
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Box>
          </>
        ) : (
          <>
            <CardHeader
              action={
                <IconButton aria-label="settings" style={{ cursor: "pointer" }}>
                  <EditIcon onClick={() => onEditClick(item.id)} />
                </IconButton>
              }
            />
            <CardContent>
              <List>
                <ListItem>
                  <TextField
                    sx={{ width: "120vh" }}
                    label="Compony Name"
                    variant="standard"
                    defaultValue={item.componyName}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </ListItem>
                <ListItem sx={{ paddingTop: "5vh" }}>
                  <TextField
                    sx={{ width: "50vh" }}
                    label="Address1"
                    variant="standard"
                    defaultValue={item.address1}
                    InputProps={{
                      readOnly: true,
                    }}
                  />

                  <TextField
                    sx={{ width: "50vh", marginLeft: "20vh" }}
                    label="Address2"
                    variant="standard"
                    defaultValue={item.address2}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </ListItem>
                <ListItem sx={{ paddingTop: "5vh" }}>
                  <TextField
                    sx={{ width: "50vh" }}
                    label="City"
                    variant="standard"
                    defaultValue={item.city}
                    InputProps={{
                      readOnly: true,
                    }}
                  />

                  <TextField
                    sx={{ width: "50vh", marginLeft: "20vh" }}
                    label="State"
                    variant="standard"
                    defaultValue={item.state}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </ListItem>
                <ListItem sx={{ paddingTop: "5vh" }}>
                  <TextField
                    sx={{ width: "50vh" }}
                    label="Contry"
                    variant="standard"
                    defaultValue={item.country}
                    InputProps={{
                      readOnly: true,
                    }}
                  />

                  <TextField
                    sx={{ width: "50vh", marginLeft: "20vh" }}
                    label="Zipcode"
                    variant="standard"
                    defaultValue={item.zipcode}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </ListItem>
              </List>
            </CardContent>
          </>
        );
      })}
    </>
  );
}
