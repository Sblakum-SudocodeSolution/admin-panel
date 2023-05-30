import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";

export default function Model(props) {
  const [userData, setUserData] = useState([]);

  const apiUrl = `https://alecapi.sudocodesolutions.com/api/Activity/`;
  const authToken = localStorage.getItem("loggedinToken");

  useEffect(() => {
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
  }, [apiUrl, authToken, props.selecteditemid]);

  const rejectUser = async () => {
    console.log("Reject");
    props.onHide();
  };

  const postApiUrl =
    "https://alecapi.sudocodesolutions.com/api/Activity/update";

  const accessUser = async () => {
    axios.post(postApiUrl, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
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
              <Button variant="outline-danger" onClick={() => rejectUser()}>
                Reject
              </Button>
              <Button
                variant="outline-success"
                className="m-2"
                onClick={() => accessUser()}
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
