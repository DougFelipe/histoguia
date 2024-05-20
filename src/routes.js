import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/loginPage";
import QuizQuestion from "./pages/QuizQuestion";
// import Usuario from "./Usuario";

const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route element={<LoginPage />} path="/" exact />
                <Route element={<QuizQuestion />} path="/quiz" />
                
                {/* <Route component = { Sobre }  path="/sobre" />
           <Route component = { Usuario }  path="/usuario" /> */}
            </Routes>
        </Router>
    )
}

export default RoutesApp;