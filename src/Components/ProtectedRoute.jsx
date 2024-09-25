import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userAuth } from "../middleware/userAuth";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // const location = useLocation();

  useEffect(() => {
    if (!userAuth()) {
      navigate("/login");
      // localStorage.setItem("redirectPath", location.pathname);
    }
  }, [navigate]);

  return userAuth() ? children : null;
}
