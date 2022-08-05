import React from "react";
import { BrowserRouter } from "react-router-dom";
import BoardRoute from "./Components/Admin/BoardRoute/BoardRoute";
import Main from "./Components/Main/Main";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Main />
        <BoardRoute />
      </BrowserRouter>
    </div>
  );
};

export default App;
