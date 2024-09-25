import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Typography, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserInfo from "./User";
import { userAuth } from "../middleware/userAuth";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
    if (userAuth()) {
      navigate("/profile");
    }
  }, [navigate]);

  const handleLogin = async (values) => {
    console.log(values);
    setLoading(true); // Set loading state to true
    try {
      const { data } = await axios.post("https://dummyjson.com/auth/login", {
        username: values.name,
        password: values.existingPassword,
        // expiresInMins: 30, // Optional, defaults to 60
      });

      if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
        message.success("Login Successful!"); // Display success message
        setIsAuthenticated(true);
        navigate("/profile", { replace: true });
      } else {
        message.error("Login Failed! No token received.");
      }

      console.log("Login successful:", data);
    } catch (error) {
      console.error("Login failed:", error);
      message.error("Login Failed! Please check your credentials."); // Display error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // if (isAuthenticated) {
  //   return <UserInfo />; // Render UserInfo component if authenticated
  // }

  return (
    <section className="lg:pb-2 md:pb-8 pb-8 product bg-blue-50 " id="products">
      <div className="container mx-auto sm:px-7 px-4 relative ">
        <div className="inner-box flex flex-col items-center justify-center pt-20 md:pb-[50px] sm:pb-[25px] pb-[15px] text-red font-bold">
          <h1 className="text-3xl mb-5 pb-5">Codegrass</h1>
          <div className="sm:px-20 px-5 bg-gray-3 py-10 rounded-lg max-w-[400px]">
            <Form name="login" layout="vertical" onFinish={handleLogin}>
              <Form.Item
                label="name"
                name="name"
                rules={[
                  { required: true, message: "Please input your username!" },
                  {
                    min: 3,
                    message: "Username must be at least 3 characters long!",
                  },
                  {
                    whitespace: true,
                    message: "Username cannot start or end with a space!",
                  },
                ]}
              >
                <Input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </Form.Item>
              <Form.Item
                label="password"
                name="existingPassword"
                rules={[
                  { required: true, message: "Please input your password!" },
                  {
                    min: 8,
                    message: "Password must be at least 8 characters long!",
                  },
                  {
                    // pattern:
                    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                    message:
                      "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character!",
                  },
                ]}
              >
                <Input.Password className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={loading}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
