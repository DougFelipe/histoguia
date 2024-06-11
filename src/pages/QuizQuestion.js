import React, { useState } from 'react';
import styles from '../css/QuizQuestion.module.css';
import Sidebar from '../components/Menu';
//import PaginationComponent from '../components/PaginationComponent';

const questions = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    options: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet,  adipiscing elit",
      "Lorem sit amet, consectetur adipiscing elit"
    ]
  },
  {
    question: "Questão 2?",
    options: [
      "Opção 1",
      "Opção 2",
      "Opção 3",
      "Opção 4"
    ]
  },
  // Adicionar mais questões 
  {
    question: "Questão 3?",
    options: [
      "Opção 1",
      "Opção 2",
      "Opção 3",
      "Opção 4"
    ]
  },
  {
    question: "Questão 4?",
    options: [
      "Opção 1",
      "Opção 2",
      "Opção 3",
      "Opção 4"
    ]
  },
  {
    question: "Questão 5?",
    options: [
      "Opção 1",
      "Opção 2",
      "Opção 3",
      "Opção 4"
    ]
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
      <div className={`flex-grow transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'ml-0'}`}>
        <div className="w-full h-full flex justify-center items-center">
          <div className={styles.container}>
            <div className={styles.questionCard}>
              <img src="/figura_questão.jpg" alt="Histology Slide" className={styles.image} />
              <p className={styles.questionText}>{currentQuestion.question}</p>
            </div>
            <form onSubmit={handleSubmit} className={styles.optionsContainer}>
              {currentQuestion.options.map((option, index) => (
                <label key={index} className={`${styles.optionLabel} ${selectedOption === option ? styles.optionLabelSelected : ''}`}>
                  <input 
                    type="radio" 
                    value={option} 
                    checked={selectedOption === option} 
                    onChange={handleOptionChange} 
                    className={styles.inputRadio}
                  />
                  {option}
                </label>
              ))}
              <button type="submit" className={styles.submitButton}>Responder</button>
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
