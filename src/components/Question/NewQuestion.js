import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Add from '../../assets/icons/add.svg';
import Delete from '../../assets/icons/delete.svg';

function CadastroQuestao() {
  const [statement, setStatement] = useState('');
  const [imagem, setImagem] = useState(null);
  const [alternativas, setAlternativas] = useState(['', '', '', '']);
  const [explicacoes, setExplicacoes] = useState(['', '', '', '']);
  const [respostaCorretaIndex, setRespostaCorretaIndex] = useState(null);
  const [themes, setThemes] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState('');
  const [feedback, setFeedback] = useState(false);
  const [buttonText, setButtonText] = useState('Cadastrar Questão');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/theme')
      .then(response => response.json())
      .then(data => setThemes(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const alternativasData = alternativas.map((alt, index) => ({
      answer: alt,
      corret: respostaCorretaIndex === index,
      explication: explicacoes[index],
      
    }));
  
    const questao = {
      statement,
      theme: { id: selectedTheme },
    };
  
    console.log("Questão a ser enviada:", questao);
    console.log("Alternativas a serem enviadas:", alternativasData);
  
    fetch('http://localhost:8080/api/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(questao),
    })
      .then(response => response.json())
      .then(data => {
        if (!data.id) {
          throw new Error('Failed to get question ID');
        }
  
        const questionId = data.id;
        const alternativasDataWithQuestionId = alternativasData.map((alt) => ({
          ...alt,
          question: { id: questionId },
        }));
  
        console.log("Alternativas com ID da questão a serem enviadas:", alternativasDataWithQuestionId);
        console.log("Alternativas com ID da questão a serem enviadas FORMAT:", JSON.stringify(alternativasDataWithQuestionId));
  
        fetch('http://localhost:8080/api/answers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(alternativasDataWithQuestionId),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            setFeedback(true);
            navigate('/questionBank');
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleOptionChange = (index) => {
    setRespostaCorretaIndex(index);
    console.log(`Selected index: ${index}`);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImagem(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleAddAlternative = () => {
    setAlternativas([...alternativas, '']);
    setExplicacoes([...explicacoes, '']);
  };

  const handleDeleteAlternative = (index) => {
    const newAlternativas = [...alternativas];
    newAlternativas.splice(index, 1);
    const newExplicacoes = [...explicacoes];
    newExplicacoes.splice(index, 1);
    setAlternativas(newAlternativas);
    setExplicacoes(newExplicacoes);
    if (respostaCorretaIndex === index) {
      setRespostaCorretaIndex(null);
    }
  };

  return (
    <div className="flex w-11/12 h-full mb-12 mt-12 bg-[#ffffff]">
      <div className="flex-grow transition-all duration-300 ml-0">
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-col font-inter-regular justify-center items-center gap-4 bg-white mt-2 mb-4 rounded-lg p-4 w-11/12 md:w-[1030px]  font-semibold text-[#130338] md:mt-[60px] ">
              {imagem && (
                <img
                  src={imagem}
                  alt="Questão"
                  className="rounded-full w-[300px] h-[300px] max-md:w-[200px] max-md:h-[200px]"
                />
              )}
              <textarea
                className="w-11/12 p-2 border border-gray-300 rounded font-inter-regular"
                placeholder="Digite o enunciado da questão"
                value={statement}
                onChange={(e) => setStatement(e.target.value)}
                required
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-2 font-inter-regular"
              />
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-2 w-[1000px] max-md:w-[300px] bg-[#ffffff]"
            >
              <select
                className="w-full p-2 mb-2 border border-gray-300 rounded font-inter-regular"
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value)}
                required
              >
                <option value="" disabled>Selecione um tema</option>
                {themes.map((theme) => (
                  <option key={theme.id} value={theme.id}>{theme.name}</option>
                ))}
              </select>
              {alternativas.map((alt, index) => (
                
                <div key={index} className="flex flex-col items-center w-[1000px] max-md:w-[300px] font-inter-regular">
                  <div className="flex flex-row items-center w-full">
                    <input
                      type="text"
                      className="w-full p-2 mb-2 border border-gray-300 rounded"
                      value={alt}
                      onChange={(e) => {
                        const newAlternativas = [...alternativas];
                        newAlternativas[index] = e.target.value;
                        console.log(index);
                        setAlternativas(newAlternativas);
                      }}
                      placeholder={`Alternativa ${index + 1}`}
                      required
                    />
                    <label className="flex items-center cursor-pointer ml-2">
                      <input
                        type="radio"
                        name="respostaCorreta"
                        value={index}
                        checked={respostaCorretaIndex === index}
                        onChange={() => handleOptionChange(index)}
                        className="hidden"
                      />
                      <span
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${respostaCorretaIndex === index ? 'border-[#130338]' : 'border-gray-300'
                          }`}
                      >
                        {respostaCorretaIndex === index && (
                          <span className="w-3 h-3 bg-[#130338] rounded-full"></span>
                        )}
                      </span>
                    </label>
                    <button
                      type="button"
                      onClick={() => handleDeleteAlternative(index)}
                      className="ml-2 p-1"
                    >
                      <img src={Delete} alt="Delete" className="w-6 h-6" />
                    </button>
                  </div>
                  <textarea
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                    value={explicacoes[index]}
                    onChange={(e) => {
                      const newExplicacoes = [...explicacoes];
                      newExplicacoes[index] = e.target.value;
                      setExplicacoes(newExplicacoes);
                    }}
                    placeholder={`Explicação da Alternativa ${index + 1}`}
                    required
                  />
                </div>
              ))}
              <div className='w-full '>
                <button
                  type="button"
                  onClick={handleAddAlternative}
                  className="mt-2 mb-2 bg-[#130338] flex justify-center items-center text-white p-2 rounded-md text-center"
                >
                  <img src={Add} alt="Add" className='p-2' />
                </button>
              </div>
              <button
                type="submit"
                className="mt-2 mb-6 bg-[#130338] text-white w-[350px] p-3  font-inter-semi rounded-xl text-center max-md:w-[200px]"
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroQuestao;