import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Delete from '../../assets/icons/delete.svg';
import Edit from '../../assets/icons/edit.svg';
import Add from '../../assets/icons/add.svg';
import { useNavigate } from 'react-router-dom';

const generateCode = (id) => {
  return id.toString().padStart(5, '0');
};

const QuestionTable = () => {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/api/questions')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setQuestions(data);
          console.log(data); // Use `data` diretamente após setar o estado
        } else {
          console.error('Expected an array but got:', data);
        }
      })
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  const handleEdit = (id) => {
    navigate(`/editQuestion/${id}`);
  };

  const deleteQuestion = (id) => {
    if (window.confirm('Tem certeza que deseja deletar esta pergunta?')) {
      const updatedQuestions = questions.filter((question) => question.id !== id);
      setQuestions(updatedQuestions);
      // Optionally, send a delete request to the server
    }
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(0);
  };

  const filteredQuestions = questions.filter((question) => {
    const code = generateCode(question.id);
    const searchTermLower = searchTerm.toLowerCase();
    return (
      code.includes(searchTermLower) || question.title.toLowerCase().includes(searchTermLower)
    );
  });

  const offset = currentPage * itemsPerPage;
  const currentQuestions = filteredQuestions.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredQuestions.length / itemsPerPage);

  return (
    <div className='w-11/12 flex flex-col justify-end items-end mt-12'>
      <a
        href='/newQuestion'
        className="px-12 py-4 bg-primary flex items-center rounded-xl text-white hover:bg-[#3D2E7C]"
      >
        <img src={Add} alt="Add" className='p-2' /> Criar Questão
      </a>
      <div className="overflow-x-auto w-full flex flex-col justify-center items-center mt-4">
        <div className="w-full relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-500"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.3333 9.64711C14.3333 6.51751 11.7962 3.98047 8.66664 3.98047C5.53704 3.98047 3 6.51751 3 9.64711C3 12.7767 5.53704 15.3138 8.66664 15.3138C11.7962 15.3138 14.3333 12.7767 14.3333 9.64711ZM17.3333 9.64711C17.3333 4.86066 13.4531 0.980469 8.66664 0.980469C3.88019 0.980469 0 4.86066 0 9.64711C0 14.4336 3.88019 18.3138 8.66664 18.3138C9.69555 18.3138 10.6826 18.1345 11.5982 17.8054C11.6416 18.0873 11.7462 18.3643 11.9161 18.6166L14.2852 22.1361C14.902 23.0524 16.1448 23.2953 17.0611 22.6785C17.9774 22.0617 18.2202 20.8188 17.6034 19.9025L15.2343 16.383C15.0908 16.1697 14.9134 15.993 14.7141 15.8551C16.3299 14.2808 17.3333 12.0812 17.3333 9.64711Z"
                fill="#767676"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Buscar perguntas por código ou título..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-4 pl-10 border rounded-[50px] focus:outline-none focus:ring-2 focus:ring-gray-300 text-[14px] font-inter-regular"
          />
        </div>
        <div className="overflow-auto w-full rounded-xl">
          <table className="w-full bg-white rounded-xl">
            <thead>
              <tr className='border-b text-left font-inter-semi'>
                <th className="px-4 py-4 w-1/6">Código</th>
                <th className="px-4 py-4 w-4/6">Título</th>
                <th className="px-4 py-4 w-1/6 text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {currentQuestions.map((question) => (
                <tr key={question.id} className="w-full bg-white border-b font-font-inter-medium">
                  <td className="px-4 py-3 w-1/6">{generateCode(question.id)}</td>
                  <td className="px-4 py-3 w-4/6">{question.statement}</td>
                  <td className="px-4 py-3 w-1/6 text-center">
                    <button
                      onClick={() => handleEdit(question.id)}
                      className="text-white font-bold py-1 px-2 rounded mr-2"
                    >
                      <img src={Edit} alt="Edit" />
                    </button>
                    <button
                      onClick={() => deleteQuestion(question.id)}
                      className="bg-white text-white font-bold py-1 px-2 rounded"
                    >
                      <img src={Delete} alt="Delete" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ReactPaginate
          previousLabel={'← Anterior'}
          nextLabel={'Próximo →'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
          className="flex justify-center mt-6 mb-6 font-inter-semi"
          pageClassName="mx-2"
          previousClassName="mx-2"
          nextClassName="mx-2"
          breakClassName="mx-2"
          activeClassName="font-bold"
        />
      </div>
    </div>
  );
};

export default QuestionTable;