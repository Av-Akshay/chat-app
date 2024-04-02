import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ Component }) => {
  const data = useSelector((store) => store.auth);

  return data.status ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
