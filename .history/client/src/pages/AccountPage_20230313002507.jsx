import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const AccountPage = () => {
  const { user, ready } = useContext(UserContext);
  if (!ready) {
    return "loading...";
  }

  return <div></div>;
};

export default AccountPage;
