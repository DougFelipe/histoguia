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
import QuestionBank from "./pages/QuestionBank";
import Conclusion from "./components/QuizSetup/conclusion";
import NewQuestion from "./pages/NewQuestion";
import EditQuestion from "./pages/EditQuestion";
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
        <Route element={<QuestionBank />} path="/questionBank" />
        <Route element={<Conclusion />} path="/conclusion" />
        <Route element={<NewQuestion />} path="/newQuestion" />
        <Route element={<EditQuestion />} path="/editQuestion/:id" />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
