import React, { useState } from "react";
import styles from "../css/QuizQuestion.module.css";
import Sidebar from "../components/Menu";
import Circle from "../assets/icons/Ellipse 3.svg";
import Verify from "../assets/icons/material-symbols_check-small-rounded.svg";
//import PaginationComponent from '../components/PaginationComponent';

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
  },
  {
    question: "Assinale a alternativa incorreta sobre esse tecido:",
    options: [
      "Apresenta uma baixa capacidade de regeneração, sendo substituído por tecido epitelial quando destruído.",
      "As fibras elásticas do tecido conjuntivo são compostas principalmente pela proteína elastina.",
      "A substância fundamental é viscosa.",
      "Existem diversas variedades de tecidos conjuntivos.",
    ],
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
  },
  {
    question: " São tipos de tecido conjuntivo especializado, EXCETO:",
    options: [
      "Tecido ósseo",
      "Tecido cartilaginoso",
      "Tecido adiposo",
      "Tecido muscular",
    ],
  },
  {
    question:
      "A alternativa que contém células que desempenham essa função de defesa é:",
    options: [
      "Fibroblastos, células-tronco e macrófagos.",
      "Adipócitos, mastócitos e linfócitos.",
      "Macrófagos, linfócitos, plasmócitos e eosinófilos. ",
      "Fibroblastos e linfócitos.",
    ],
  },
];

const QuizQuestion = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleToggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected option: ${selectedOption}`);
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
        <div className="w-full h-full flex justify-center items-center">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-col items-center gap-4 bg-white mb-4 rounded-lg p-4 w-[1000px] font-semibold text-[#130338]">
              <img
                src="/figura_questão.jpg"
                alt="Histology Slide"
                className="rounded-full w-[300px] h-[300px]"
              />
              <p className="text-[25px]">{currentQuestion.question}</p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-2 w-[1000px]"
            >
              {currentQuestion.options.map((option, index) => (
                <label
                  key={index}
                  className={`p-3 rounded-lg cursor-pointer bg-white flex flex-row justify-between items-center w-full text-[#130338] text-[18px] ${
                    selectedOption === option
                      ? "bg-[#B2B3F1] font-semibold"
                      : ""
                  }`}
                >
                  {option}
                  <img
                    src={selectedOption === option ? Verify : Circle}
                    alt="Círculo"
                    className={`w-[20px] h-[20px] ${
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
              ))}
              <button
                type="submit"
                className="mt-2 mb-2 bg-[#130338] text-white w-[350px] p-2 rounded-md text-center"
              >
                Responder
              </button>
            </form>
            {/* <PaginationComponent 
              total={questions.length} 
              currentPage={currentPage} 
              onPageChange={handlePageChange} 
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
