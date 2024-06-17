import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/loginPage";
import Home from "./pages/Home";
import QuizQuestion from "./pages/QuizQuestion";
import QuizSetup from "./pages/quizSetup";
import Register from "./components/Login/register";
import AdmAlunos from "./pages/AdmAlunos";
import UserProfile from "./pages/UserProfile";
import Historic from "./pages/Historic";
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
        <Route element={<AdmAlunos />} path="/admAlunos" />
        <Route element={<UserProfile />} path="/profile" />
        <Route element={<Historic />} path="/historic" />

        {/* <Route component = { Sobre }  path="/sobre" />
           <Route component = { Usuario }  path="/usuario" /> */}
      </Routes>
    </Router>
  );
};

export default RoutesApp;
