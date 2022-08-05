import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../AdminAuth/SignIn";
import SignUp from "../AdminAuth/SignUp";

const BoardRoute = () => {
  return (
    <Routes>
      <Route path="/admin/signup" element={<SignUp />} />
      <Route path="/admin/signin" element={<SignIn />} />
    </Routes>
  );
};

export default BoardRoute;
