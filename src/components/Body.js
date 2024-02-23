import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import {
  loginUser,
  logoutUser,
} from "../utils/reduxstore/storeSlices/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(loginUser(auth.currentUser));
      } else {
        dispatch(logoutUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default Body;
