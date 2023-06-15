import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Component/View/UI/Dashboard";
import ManageUser from "./Component/View/UI/ManageUser/ManageUser";
import WorkQueue from "./Component/View/UI/WorkQueue/Work_Queue";
import Profile from "./Component/View/Profile/Profile";
import Application from "./Component/View/UI/Application";
import Signin from "./Component/View/Pages/Singin";
import Signup from "./Component/View/Pages/Signup";
import UserElement from "./Component/View/UI/UserElement";
import AdminElement from "./Component/View/UI/AdminElement";

// import ProtectedRoutes from "./Component/services/ProtectedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Signin />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route
            path="/dashboard"
            exact
            element={
              // <UserElement>
              <Dashboard />
              // </UserElement>
            }
          />
          <Route
            path="/manage-user"
            element={
              <AdminElement>
                <ManageUser />
              </AdminElement>
            }
          />
          <Route
            path="/work-queue"
            element={
              <AdminElement>
                <WorkQueue />
              </AdminElement>
            }
          />
          <Route path="/appliaction" element={<Application />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
