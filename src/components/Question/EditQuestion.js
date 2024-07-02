import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Add from '../../assets/icons/add.svg';
import Delete from '../../assets/icons/delete.svg';

const EditQuestion = () => {
  const { id } = useParams(); // Obtém o ID da questão da URL
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);

  const [answers, setAnswers] = useState([]);
  const [enunciado, setEnunciado] = useState('');
  const [imagem, setImagem] = useState(null);
  //const [alternativas, setAlternativas] = useState(['', '', '', '']);
  const [alternatives, setAlternatives] = useState([]);
  const [explicacoes, setExplicacoes] = useState(['', '', '', '']);
  const [respostaCorreta, setRespostaCorreta] = useState('');
  const [feedback, setFeedback] = useState(false);
  const [themes, setThemes] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState('');
  const [buttonText, setButtonText] = useState('Atualizar Questão');




  useEffect(() => {
    fetch('/api/theme')
      .then(response => response.json())
      .then(data => setThemes(data));

    fetch(`http://localhost:8080/api/questions/${id}`)
      .then(response => response.json())
      .then(data => {
        setEnunciado(data.statement);
        setQuestion(data);
        console.log(question);
        //setImagem(data.image ? URL.createObjectURL(data.image) : null);
        setSelectedTheme(data.theme.id);

        fetch(`http://localhost:8080/api/answers/question/${id}`)
          .then(response => response.json())
          .then(alternativeData => {
            setAnswers(alternativeData);
            if (Array.isArray(alternativeData)) {
              setAlternatives(alternativeData.map(alt => alt.answer));
              setExplicacoes(alternativeData.map(alt => alt.explication));
              const correctAnswer = alternativeData.find(alt => alt.isCorret);
              if (correctAnswer) {
                setRespostaCorreta(correctAnswer.answer);
              }
            } else {
              console.error('Expected array but got:', alternativeData);
            }
          })
          .catch(error => console.error('Error fetching alternatives:', error));
      })
      .catch(error => console.error('Error fetching question:', error));
  }, [id]);




  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Monta o objeto da questão atualizada
    const questaoAtualizada = {
      id,
      statement: enunciado,
      theme: { id: selectedTheme },
    };
    // Monta o array de alternativas atualizadas
    const alternativasAtualizadas = alternatives.map((alt, index) => ({
      id: answers[index]?.id, // Verifica se há um ID existente para atualização
      answer: alt,
      explication: explicacoes[index],
      isCorret: respostaCorreta === alt,
      question: { id: id }
    }));
  
    setFeedback(true);
  
    // Define a promessa para enviar os dados da questão atualizada
    const updateQuestion = (e) => fetch(`http://localhost:8080/api/questions/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(questaoAtualizada),
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then(data => {
      console.log('Questão atualizada:', data);
      setFeedback(true);
      // Após atualizar a questão, atualiza as alternativas
      return Promise.all(alternativasAtualizadas.map(alt => {
        if (alt.id) {
          // Se há um ID, atualiza a alternativa existente
          return fetch(`http://localhost:8080/api/answers/${alt.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(alt),
          }).then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          });
        } else {
          // Se não há um ID, cria uma nova alternativa
          return fetch(`http://localhost:8080/api/answers`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(alt),
          }).then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          });
        }
      }));
    }).then(() => {
      // Após todas as alternativas serem atualizadas, navega para a página de questionBank
      navigate('/questionBank');
    }).catch(error => {
      console.error('Error updating question or answers:', error);
    });
  
    // Executa a promessa de atualização da questão e das alternativas
    updateQuestion();
  };

  const handleOptionChange = (e) => {
    setRespostaCorreta(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImagem(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleAddAlternative = () => {
    setAlternatives([...alternatives, '']);
    setExplicacoes([...explicacoes, '']);
  };

  const handleDeleteAlternative = (index) => {
    const newAlternativas = [...alternatives];
    newAlternativas.splice(index, 1);
    const newExplicacoes = [...explicacoes];
    newExplicacoes.splice(index, 1);
    setAlternatives(newAlternativas);
    setExplicacoes(newExplicacoes);
    if (respostaCorreta === alternatives[index]) {
      setRespostaCorreta('');
    }
  };

  return (
    <div className="flex w-11/12 h-full mb-12 mt-12 bg-[#ffffff]">
      <div className="flex-grow transition-all duration-300 ml-0">
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-col font-inter-regular justify-center items-center gap-4 bg-white mt-2 mb-4 rounded-lg p-4 w-[1030px]  font-semibold text-[#130338] md:mt-[60px] ">
              {imagem && (
                <img
                  src={imagem}
                  alt="Questão"
                  className="rounded-full w-[300px] h-[300px] max-md:w-[200px] max-md:h-[200px]"
                />
              )}
              <textarea
                className="w-full p-2 border border-gray-300 rounded font-inter-regular"
                placeholder="Digite o enunciado da questão"
                value={enunciado}
                onChange={(e) => setEnunciado(e.target.value)}
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
              {alternatives.map((alt, index) => (
                <div key={index} className="flex flex-col items-center w-[1000px] max-md:w-[300px] font-inter-regular">
                  <div className="flex flex-row items-center w-full">
                    <input
                      type="text"
                      className="w-full p-2 mb-2 border border-gray-300 rounded"
                      value={alt}
                      onChange={(e) => {
                        const newAlternativas = [...alternatives];
                        newAlternativas[index] = e.target.value;
                        setAlternatives(newAlternativas);
                      }}
                      placeholder={`Alternativa ${index + 1}`}
                      required
                    />
                    <label className="flex items-center cursor-pointer ml-2">
                      <input
                        type="radio"
                        name="respostaCorreta"
                        value={alt}
                        checked={respostaCorreta === alt}
                        onChange={handleOptionChange}
                        className="hidden"
                      />
                      <span
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${respostaCorreta === alt ? 'border-[#130338]' : 'border-gray-300'
                          }`}
                      >
                        {respostaCorreta === alt && (
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

export default EditQuestion;