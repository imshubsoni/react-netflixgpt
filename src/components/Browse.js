import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const userInfo = useSelector((store) => store.user.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo === null) navigate("/login");
  });

  return (
    <div className="text-xl">
      Logged In User Is:
      {userInfo && <span className="font-bold">{userInfo.email}</span>}
    </div>
  );
};

export default Browse;
