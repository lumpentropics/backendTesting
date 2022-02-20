import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import UserInfo from "./components/User/UserInfo.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="user/info" element={<UserInfo />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
