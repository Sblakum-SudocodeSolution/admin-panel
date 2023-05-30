import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes() {
  const auth = localStorage.getItem("loggedinToken");
  return auth ? <Outlet /> : <Navigate to={"/"} />;
}
