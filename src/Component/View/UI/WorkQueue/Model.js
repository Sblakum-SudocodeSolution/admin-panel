import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";

export default function Model(props) {
  const [userData, setUserData] = useState([]);

  const apiUrl = `https://alecapi.sudocodesolutions.com/api/Activity/`;

  useEffect(() => {
    const authToken = localStorage.getItem("loggedinToken");
    axios
      .get(`${apiUrl}id?activityId=${props.selecteditemid}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setUserData(res.data);
      });
  }, [props.selecteditemid]);

  const Post_Api_Url =
    "https://alecapi.sudocodesolutions.com/api/Activity/update";

  const allowUser = async (id) => {
    const authToken = localStorage.getItem("loggedinToken");
    const headers = {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    };
    const data = {
      actionRemarks: "Approve",
      actionId: id,
      output: 1,
      actionTakenByEmail: "sblakum@gmail.com",
      actionTakenByName: "Sidhdharth_Lakum",
      actionFolderUrl: "",
    };
    axios.post(Post_Api_Url, data, {
      headers: headers,
    });

    props.onHide();
  };

  const rejectUser = async (id) => {
    const authToken = localStorage.getItem("loggedinToken");
    const headers = {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    };
    const data = {
      actionRemarks: "Reject",
      actionId: id,
      output: 2,
      actionTakenByEmail: "sblakum@gmail.com",
      actionTakenByName: "Sidhdharth_Lakum",
      actionFolderUrl: "",
    };

    axios.post(Post_Api_Url, data, {
      headers: headers,
    });
    props.onHide();
  };

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            User Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <b>Id :</b> {userData.requestId}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>UserName :</b> {userData.userName}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>First Name :</b> {userData.firstName}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Last Name :</b> {userData.lastName}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>userType :</b> {userData.userType}
            </ListGroup.Item>
            <ListGroup.Item className="text-end">
              <Button
                variant="outline-danger"
                onClick={() => rejectUser(userData.uniqueId)}
              >
                Reject
              </Button>
              <Button
                variant="outline-success"
                className="m-2"
                onClick={() => allowUser(userData.uniqueId)}
              >
                Allow
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
}
