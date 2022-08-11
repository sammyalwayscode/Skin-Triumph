import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminSecrete from "../AdminAuth/AdminSecrete";
import SignIn from "../AdminAuth/SignIn";
import SignUp from "../AdminAuth/SignUp";
import SignUpConfirm from "../AdminAuth/SignUpConfirm";

const BoardRoute = () => {
  return (
    <Routes>
      <Route path="/admin/signup" element={<SignUp />} />
      <Route path="/admin/signin" element={<SignIn />} />
      <Route path="/admin/toverify" element={<SignUpConfirm />} />
      <Route path="/api/admin/:id/:token" element={<AdminSecrete />} />
    </Routes>
  );
};

export default BoardRoute;
