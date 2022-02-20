import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import UserInfo from "./components/User/UserInfo.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={Home} />
        <Route>
          <Login></Login>
        </Route>
        <Route>
          <UserInfo></UserInfo>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
