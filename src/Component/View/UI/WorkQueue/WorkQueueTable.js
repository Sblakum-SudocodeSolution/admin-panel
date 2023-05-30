import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import axios from "axios";
import Model from "./Model";

export default function WorkQueueTable() {
  const [userData, setUserData] = useState([]);
  const [modalShow, setModalShow] = useState({
    show: false,
    selecteditemid: 0,
  });

  useEffect(() => {
    getAPIListData();
  }, []);

  const apiUrl =
    "https://alecapi.sudocodesolutions.com/api/Activity/status?statusId=3";
  const authToken = localStorage.getItem("loggedinToken");

  const getAPIListData = () => {
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => {
        console.log("Err : ", error);
      });
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Id</b>
              </TableCell>
              <TableCell>
                <b>UserName</b>
              </TableCell>
              <TableCell>
                <b>FirstName</b>
              </TableCell>
              <TableCell>
                <b>LastName</b>
              </TableCell>
              <TableCell>
                <b>userType</b>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((item) => (
              <TableRow key={item.uniqueId}>
                <TableCell>{item.requestId}</TableCell>
                <TableCell>{item.userName}</TableCell>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.userType}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() =>
                      setModalShow({
                        show: true,
                        selecteditemid: item.uniqueId,
                      })
                    }
                  >
                    Action
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Model
        show={modalShow.show}
        selecteditemid={modalShow.selecteditemid}
        onHide={() =>
          setModalShow({
            show: false,
            selecteditemid: 0,
          })
        }
      />
    </>
  );
}
