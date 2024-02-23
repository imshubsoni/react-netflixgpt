import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/reduxstore/storeSlices/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((store) => store.user.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(logoutUser());
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="header-logo relative z-10 flex justify-between items-center bg-gradient-to-b from-black">
      <img
        className="logo w-52 py-4 ml-40"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {userInfo && (
        <div className="userinfo-container flex mr-5">
          <img
            className="profile-photo mr-3 w-12 rounded-lg"
            src="https://avatars.githubusercontent.com/u/56208408?v=4"
            alt="Profile Photo"
          />
          <button
            onClick={handleSignOut}
            className="border-2 border-red-600 rounded-xl p-1 text-white px-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
