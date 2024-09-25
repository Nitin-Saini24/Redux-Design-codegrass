import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const userInfo = localStorage.getItem("userInfo");
      if (userInfo) {
        setUser(userInfo);
      }
    };
    fetchUserData();
  }, []);

  return user ? (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <p>Email: {user.email}</p>
      {/* Add more user information as needed */}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default UserInfo;
