import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";

import ProtectedRoute from "./Components/ProtectedRoute";
import DefaultLayout from "./Components/DefaultLayout";
import Profile from "./pages/profile";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/page5";
import Page6 from "./pages/Page6";
import DashBoard from "./pages/DashBoard/DashBoard";
import Internal_Staff from "./pages/Staff/Internal_Staff";
import Admins from "./pages/Staff/Admins";
import DragnDrop from "./Components/Drag n Drop/DragnDrop";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            element={
              <>
                <ProtectedRoute>
                  <DefaultLayout />
                </ProtectedRoute>
              </>
            }
          >
            <Route path="/" element={<DashBoard />} />
            <Route path="/admin/internal-staff" element={<Internal_Staff />} />
            <Route path="/admin/admins" element={<Admins />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
            <Route path="/page5" element={<Page5 />} />
            <Route path="/page6" element={<Page6 />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/calendar" element={<Page6 />} />
            <Route path="/drag-drop" element={<DragnDrop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
