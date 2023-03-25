import React, { useContext } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";

const AccountPage = () => {
  const { user, ready } = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }
  if (!ready) {
    return "loading...";
  }
  if (ready && !user) {
    return <Navigate to="/login" />;
  }
  function linkClasses(type = null) {
    let classes = "py-2 px-6";
    if (subpage === type) {
      classes += "bg-primary text-white rounded-full ";
    }
    return classes;
  }

  return (
    <div>
      <nav className="w-full flex mt-8 gap-2 justify-center">
        <Link className={linkClasses("profile")} to={"/account"} />
        <Link className={linkClasses("places")} to={"/account/places"} />
        <Link className={linkClasses("bookings")} to={"/account/bookings"} />
      </nav>
    </div>
  );
};

export default AccountPage;
