import React from "react";
import { BrowserRouter } from "react-router-dom";
import AdminRoute from "./Components/Admin/AdminDashboard/AdminBoard/Routes/AdminRoute";
import BoardRoute from "./Components/Admin/BoardRoute/BoardRoute";
import Main from "./Components/Main/Main";
import { MainGlobal } from "./Components/ContexGlobal/Global";

const App = () => {
  return (
    <div>
      <MainGlobal>
        <BrowserRouter>
          <Main />
          <BoardRoute />
          <AdminRoute />
        </BrowserRouter>
      </MainGlobal>
    </div>
  );
};

export default App;
