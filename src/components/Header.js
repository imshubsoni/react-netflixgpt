import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  loginUser,
  logoutUser,
} from "../utils/reduxstore/storeSlices/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";
import { toggleGptSearch } from "../utils/reduxstore/storeSlices/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((store) => store.user.user);
  const isGptSearchPage = useSelector((store) => store.gpt.showGptSearch);

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

  const handleGptSearchToggle = () => {
    dispatch(toggleGptSearch());
  };

  return (
    <div className="header-logo z-30 flex justify-between items-center bg-gradient-to-b from-black fixed w-full">
      <img className="logo w-52 py-4 ml-40" src={NETFLIX_LOGO} alt="logo" />
      {userInfo && (
        <button
          onClick={handleGptSearchToggle}
          className="text-red-600 px-6 mr-6"
        >
          {isGptSearchPage ? (
            <i className="fa-solid fa-house text-4xl"></i>
          ) : (
            <i className="fa-brands fa-searchengin text-5xl"></i>
          )}
        </button>
      )}
      {userInfo && (
        <div className="userinfo-container flex mr-5">
          <img
            className="profile-photo mr-3 w-12 rounded-lg"
            src={userInfo.photoURL}
            alt="Profile Photo"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 rounded-md p-1 text-white px-6"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
