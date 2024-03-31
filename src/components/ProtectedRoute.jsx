import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ Component }) => {
  const data = useSelector((store) => store.auth);
  console.log(data);

  return data.status ? <Component /> : <Navigate to="/sighup" />;
};

export default ProtectedRoute;