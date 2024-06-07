import React, { useState } from 'react';
import styles from '../css/QuizQuestion.module.css'; 
import Sidebar from '../components/Menu.js';

// Componente funcional QuizQuestion
const QuizQuestion = () => {
  // Utiliza o useState para criar o estado selectedOption, inicializado como null
  // Este estado armazena a opção selecionada pelo usuário
  const [selectedOption, setSelectedOption] = useState(null);

  // Função para tratar mudanças na seleção de opções. Atualiza o estado selectedOption com o valor selecionado
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Função para tratar o envio do formulário
  // Previne o comportamento padrão do formulário (recarregar a página) e exibe um alerta com a opção selecionada
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected option: ${selectedOption}`);
  };

  // Renderiza o componente na tela
  return (
    <>
      <Sidebar></Sidebar>
      <div className={styles.container}>
        {/* Div container para a pergunta, contendo uma imagem e o texto da pergunta */}
        <div className={styles.questionCard}>
          <img src="/figura_questão.jpg" alt="Histology Slide" className={styles.image} />
          <p className={styles.questionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
        </div>
        {/* Formulário com as opções de resposta */}
        <form onSubmit={handleSubmit} className={styles.optionsContainer}>
          {/* Mapeia um array de opções e renderiza cada opção como um label com um input do tipo radio */}
          {["Lorem ipsum dolor sit amet, consectetur adipiscing ", 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Lorem ipsum dolor sit amet,  adipiscing elit",
          "Lorem sit amet, consectetur adipiscing elit"].map((option, index) => (
            <label key={index} className={`${styles.optionLabel} ${selectedOption === option ? styles.optionLabelSelected : ''}`}>
              <input 
                type="radio" 
                value={option} 
                checked={selectedOption === option} 
                onChange={handleOptionChange} 
                className={styles.inputRadio}
              />
              {option} {/* Exibe o texto da opção */}
            </label>
          ))}
          {/* Botão para submeter o formulário */}
          <button type="submit" className={styles.submitButton}>Responder</button>
        </form>
      </div>
    </>
  );
};

export default QuizQuestion;
