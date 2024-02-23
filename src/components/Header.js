import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  loginUser,
  logoutUser,
} from "../utils/reduxstore/storeSlices/userSlice";
import { NETFLIX_LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((store) => store.user.user);

  useEffect(() => {
    const unsubscribeEvent = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(loginUser(auth.currentUser));
        navigate("/browse");
      } else {
        dispatch(logoutUser());
        navigate("/login");
      }
    });

    // We need to unsubscribe from this onAuthStateChanged event when the component unmout, or reload happens -- because this is event listener, and everytime page re-loads, useEffect is called, and it attaches the event listener to DOM again, so there will be miltiple instances of this event listener. To avoid that we need to unsubscribe from this event.
    return () => unsubscribeEvent();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(logoutUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="header-logo relative z-10 flex justify-between items-center bg-gradient-to-b from-black">
      <img className="logo w-52 py-4 ml-40" src={NETFLIX_LOGO} alt="logo" />
      {userInfo && (
        <div className="userinfo-container flex mr-5">
          <img
            className="profile-photo mr-3 w-12 rounded-lg"
            src={userInfo.photoURL}
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
