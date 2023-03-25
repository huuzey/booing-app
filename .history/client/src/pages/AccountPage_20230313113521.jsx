import React, { useContext, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import PlacesPage from "./PlacesPage";

export default AccountPage = () => {
  const { user, ready, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }
  if (!ready) {
    return "loading...";
  }
  if (ready && !user && !redirect) {
    return <Navigate to="/login" />;
  }
  function linkClasses(type = null) {
    let classes = "py-2 px-6 inline-flex gap-1";
    if (subpage === type) {
      classes += "bg-primary text-white rounded-full ";
    } else {
      classes += "bg-gray-200";
    }
    return classes;
  }
  async function Logout() {
    await axios.post("/logout", user.id);
    setUser(null);
    redirect("/");
  }
  if (redirect) {
    <Navigate to={redirect} />;
  }
  return (
    <div>
      <nav className="w-full flex mt-8 gap-2 justify-center mb-8">
        <Link className={linkClasses("profile")} to={"/account"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          My profile
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"} />
        <Link className={linkClasses("bookings")} to={"/account/bookings"} />
      </nav>
      {subpage === "profile" && (
        <div className="text-white max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button onClick={Logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && <PlacesPage />}
    </div>
  );
};
