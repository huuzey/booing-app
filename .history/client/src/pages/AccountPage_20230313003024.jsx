import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const AccountPage = () => {
  const { user, ready } = useContext(UserContext);
  if (!ready) {
    return "loading...";
  }
  if (ready && !user) {
    return <Navigate to="/login" />;
  }

  return <div></div>;
};

export default AccountPage;
