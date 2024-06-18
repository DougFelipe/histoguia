import React, { useState } from "react";
import Sidebar from "../components/Menu";
import Circle from "../assets/icons/Ellipse 3.svg";
import Verify from "../assets/icons/material-symbols_check-small-rounded.svg";
import { useNavigate } from "react-router-dom";
import PaginationComponent from '../components/PaginationComponent';

const questions = [
  {
    question:
      "Sobre o tecido conjuntivo propriamente dito, assinale a alternativa correta:",
    options: [
      "O tecido conjuntivo propriamente dito frouxo pode ser modelado ou não modelado.",
      "O tecido conjuntivo denso oferece maior resistência e proteção aos tecidos que o tecido conjuntivo frouxo.",
      "Quando as fibras colágenas desse tecido são organizadas em feixes sem uma orientação definida, o tecido chama-se denso modelado.",
      "Esse tecido apresenta 10 subdivisões.",
    ],
    respostaCorreta:
      "O tecido conjuntivo denso oferece maior resistência e proteção aos tecidos que o tecido conjuntivo frouxo.",
    feedback:
      "A resposta correta é: O tecido conjuntivo denso oferece maior resistência e proteção aos tecidos que o tecido conjuntivo frouxo. Essa é a resposta devido a...",
  },
  {
    question: "Assinale a alternativa incorreta sobre esse tecido:",
    options: [
      "Apresenta uma baixa capacidade de regeneração, sendo substituído por tecido epitelial quando destruído.",
      "As fibras elásticas do tecido conjuntivo são compostas principalmente pela proteína elastina.",
      "A substância fundamental é viscosa.",
      "Existem diversas variedades de tecidos conjuntivos.",
    ],
    respostaCorreta:
      "Apresenta uma baixa capacidade de regeneração, sendo substituído por tecido epitelial quando destruído.",
    feedback:
      "A resposta correta é: Apresenta uma baixa capacidade de regeneração, sendo substituído por tecido epitelial quando destruído. Essa é a resposta devido a...",
  },
  {
    question:
      "O tecido conjuntivo encontrado em tendões, ligamentos e aponeurose é classificado como:",
    options: [
      "Tecido conjuntivo frouxo.",
      "Tecido conjuntivo denso modelado.",
      "Tecido conjuntivo cartilaginoso.",
      "Tecido conjuntivo denso não-modelado.",
    ],
    respostaCorreta: "Tecido conjuntivo denso modelado.",
    feedback:
      "A resposta correta é: Tecido conjuntivo denso modelado. Essa é a resposta devido a...",
  },
  {
    question: " São tipos de tecido conjuntivo especializado, EXCETO:",
    options: [
      "Tecido ósseo",
      "Tecido cartilaginoso",
      "Tecido adiposo",
      "Tecido muscular",
    ],
    respostaCorreta: "Tecido muscular",
    feedback:
      "A resposta correta é: Tecido muscular. Essa é a resposta devido a...",
  },
  {
    question:
      "A alternativa que contém células que desempenham essa função de defesa é:",
    options: [
      "Fibroblastos, células-tronco e macrófagos.",
      "Adipócitos, mastócitos e linfócitos.",
      "Macrófagos, linfócitos, plasmócitos e eosinófilos.",
      "Fibroblastos e linfócitos.",
    ],
    respostaCorreta: "Macrófagos, linfócitos, plasmócitos e eosinófilos.",
    feedback:
      "A resposta correta é: Macrófagos, linfócitos, plasmócitos e eosinófilos. Essa é a resposta devido a...",
  },
];

const QuizQuestion = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [feedback, setFeedback] = useState(false);
  const [buttonText, setButtonText] = useState("Responder");
  const [acertos, setAcertos] = useState(0);

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
              <img
                src="/figura_questão.jpg"
                alt="Histology Slide"
                className="rounded-full w-[300px] h-[300px] max-md:w-[200px] max-md:h-[200px]"
              />
              <p className="text-[25px] max-md:text-[15px]">
                {currentQuestion.question}
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-2 w-[1000px] max-md:w-[300px]"
            >
              {currentQuestion.options.map((option, index) => (
                <div className="flex flex-col items-center w-[1000px] max-md:w-[300px]">
                  <label
                    key={index}
                    className={`p-3 cursor-pointer flex flex-row justify-between items-center w-full text-[#130338] text-[18px] max-md:text-[12px] ${
                      selectedOption === option
                        ? "bg-[#B2B1F3] font-semibold"
                        : "bg-white"
                    }
                      ${
                        feedback
                          ? "rounded-t-lg pointer-events-none"
                          : "rounded-lg"
                      }
                    `}
                  >
                    {option}
                    <img
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
            </form>
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
