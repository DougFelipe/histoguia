import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/loginPage";
import Home from "./pages/home";
import QuizQuestion from "./pages/QuizQuestion";
import QuizSetup from "./pages/quizSetup";
import Register from "./components/register";
// import Usuario from "./Usuario";

const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LoginPage />} path="/" exact />
        <Route element={<Home />} path="/home" exact />
        <Route element={<QuizQuestion />} path="/quiz" />
        <Route element={<QuizSetup />} path="/quizSetup" />
        <Route element={<Register />} path="/register" />

        {/* <Route component = { Sobre }  path="/sobre" />
           <Route component = { Usuario }  path="/usuario" /> */}
      </Routes>
    </Router>
  );
};

export default RoutesApp;
