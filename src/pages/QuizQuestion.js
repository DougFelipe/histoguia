import React, { useState } from "react";
import Sidebar from "../components/Menu";
import Circle from "../assets/icons/Ellipse 3.svg";
import Verify from "../assets/icons/material-symbols_check-small-rounded.svg";
import { useLocation, useNavigate } from "react-router-dom";
import PaginationComponent from '../components/PaginationComponent';

const QuizQuestion = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [feedback, setFeedback] = useState(false);
  const [buttonText, setButtonText] = useState("Responder");
  const [acertos, setAcertos] = useState(0);
  const location = useLocation();
  const { questions } = location.state;
  const navigate = useNavigate();

  const handleToggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (buttonText === "Responder") {
      if (selectedOption === currentQuestion.respostaCorreta) {
        setAcertos(acertos + 1);
      }
      setFeedback(true);
      setButtonText("Próximo");
    } else {
      setFeedback(false);
      setButtonText("Responder");
      if (currentPage !== questions.length) {
        setCurrentPage(currentPage + 1);
      } else {
        navigate("/conclusion", {
          state: { acertos: acertos },
        });
      }
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedOption(null);
  };

  const currentQuestion = questions[currentPage - 1];

  return (
    <div className="flex h-screen bg-[#F1F0F3]">
      <Sidebar onToggle={handleToggleSidebar} />
      <div
        className={`flex-grow transition-all duration-300 ${
          isSidebarOpen ? "md:ml-64" : "ml-0"
        }`}
      >
        <div className="w-full flex justify-center items-center mt-16">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-col items-center gap-4 bg-white mt-2 mb-4 rounded-lg p-4 w-[1000px] font-semibold text-[#130338] max-md:mt-[80px] max-md:w-[300px]">
              {/* <img
                src="/figura_questão.jpg"
                alt="Histology Slide"
                className="rounded-full w-[300px] h-[300px] max-md:w-[200px] max-md:h-[200px]"
              /> */}
              <p className="text-[25px] max-md:text-[15px]">
                {currentQuestion.statement}
              </p>
            </div>
            {/* <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-2 w-[1000px] max-md:w-[300px]"
            >
              {currentQuestion.alternatives.map((option, index) => (
                <div className="flex flex-col items-center w-[1000px] max-md:w-[300px]">
                  <label
                    key={index}
                    className={`p-3 cursor-pointer flex flex-row justify-between items-center w-full text-[#130338] text-[18px] max-md:text-[12px] ${
                      option.corret === true
                        ? "bg-[#B2B1F3] font-semibold"
                        : "bg-white"
                    }
                      ${
                        option.explication
                          ? "rounded-t-lg pointer-events-none"
                          : "rounded-lg"
                      }
                    `}
                  >
                    {option}
                    {/* <img
                      src={selectedOption === option ? Verify : Circle}
                      alt="CheckBox Imagem"
                      className={`w-[20px] h-[20px] max-md:w-[15px] max-md:h-[15px] ${
                        selectedOption === option
                          ? "bg-[#130338] rounded-full"
                          : ""
                      }`}
                    /> 
                    <input
                      type="radio"
                      value={option}
                      checked={selectedOption === option}
                      onChange={handleOptionChange}
                      className="hidden"
                    />
                  </label>
                  {feedback && selectedOption === option && (
                    <div className="bg-white p-4 px-[30px] rounded-b-lg w-[1000px] max-md:w-[300px]">
                      <p className="font-semibold text-[20px] text-[#130338] max-md:text-[15px]">
                        {selectedOption === currentQuestion.respostaCorreta
                          ? "Resposta Correta!"
                          : "Resposta Errada!"}
                      </p>
                      <p className="text-[14px] text-light text-[#130338] max-md:text-[10px]">
                        {currentQuestion.feedback}
                      </p>
                    </div>
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="mt-2 mb-2 bg-[#130338] text-white w-[350px] p-2 rounded-md text-center max-md:w-[200px]"
              >
                {buttonText}
              </button>
            </form> */}
            <PaginationComponent 
              total={questions.length} 
              currentPage={currentPage} 
              onPageChange={handlePageChange} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;