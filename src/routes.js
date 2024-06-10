import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/loginPage";
import QuizQuestion from "./pages/QuizQuestion";
import Home from "./pages/home";
import Register from "./components/register";
// import Usuario from "./Usuario";

const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LoginPage />} path="/" exact />
        <Route element={<QuizQuestion />} path="/quiz" />
        <Route element={<Home />} path="/home" />
        <Route element={<Register />} path="/register" />

        {/* <Route component = { Sobre }  path="/sobre" />
           <Route component = { Usuario }  path="/usuario" /> */}
      </Routes>
    </Router>
  );
};

export default RoutesApp;
