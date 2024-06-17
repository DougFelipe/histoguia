import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Delete from '../../assets/icons/delete.svg';
import Edit from '../../assets/icons/edit.svg';

const questions = [
    { id: 1, title: 'Qual é a unidade básica dos tecidos?' },
    { id: 2, title: 'Que tipo de tecido é responsável pela contração muscular?' },
    { id: 3, title: 'Que tipo de tecido reveste as superfícies do corpo?' },
    { id: 4, title: 'Que tipo de tecido conecta e sustenta outros tecidos?' },
    { id: 5, title: 'Que tipo de tecido é responsável pela condução de impulsos nervosos?' },
    { id: 6, title: 'O que é a matriz extracelular?' },
    { id: 7, title: 'Qual é a principal função do tecido epitelial?' },
    { id: 8, title: 'Qual é a função dos fibroblastos no tecido conjuntivo?' },
    { id: 9, title: 'O que são células adiposas?' },
    { id: 10, title: 'Qual é a função do tecido adiposo?' },
    { id: 11, title: 'O que são osteócitos?' },
    { id: 12, title: 'Qual é a função dos condrócitos?' },
    { id: 13, title: 'Qual é a diferença entre tecido epitelial simples e estratificado?Qual é a diferença entre tecido epitelial simples e estratificado?Quelial simples e estratificado?Qual é a diferença entre tecido epitelial simples e estratificado?Quelial simples e estratificado?Qual é a diferença entre tecido epitelial simples e estratificado?Quelial simples e estratificado?Qual é a diferença entre tecido epitelial simples e estratificado?Quelial simples e estratificado?Qual é a diferença entre tecido epitelial simples e estratificado?Quelial simples e estratificado?Qual é a diferença entre tecido epitelial simples e estratificado?Qual é a diferença entre tecido epitelial simples e l simples e estratificado?Qual é a diferença entre tecido epitelial simples e estratificado?Quelial simples e estratificado?Qual é a diferença entre tecido epitelial simples e estratificado?Quelial simples e estratificado?Qual é a diferença entre tecido epitelial simples e estratificado?Quelial simples e estratificado?Qual é a diferença entre tecido epitelial simples e estratificado?Quelial simples e estratificado?Qual é a diferença entre tecido epitelial simples e estratificado?Quelial simples e estratificado?Qual é a diferença entre tecido epitelial simples e estratificado?Qual é a diferença entre tecido epitelial simples e estratificado?Qual é a diferença entre tecido epitelial simples e estratificado?' },
    { id: 14, title: 'O que são glândulas endócrinas?' },
    { id: 15, title: 'O que são glândulas exócrinas?' },
    { id: 16, title: 'O que é tecido conjuntivo frouxo?' },
    { id: 17, title: 'Qual é a função dos macrófagos no tecido conjuntivo?' },
    { id: 18, title: 'O que são mastócitos e qual a sua função?' },
    { id: 19, title: 'O que é tecido conjuntivo denso?' },
    { id: 20, title: 'Qual é a função do tecido cartilaginoso?' },
    { id: 21, title: 'O que é o tecido ósseo?' },
    { id: 22, title: 'Qual é a função dos osteoblastos?' },
    { id: 23, title: 'O que é a lâmina basal?' },
    { id: 24, title: 'Qual é a função dos queratinócitos?' },
    { id: 25, title: 'O que são células de Schwann?' }
];

const generateCode = (id) => {
    return id.toString().padStart(5, '0');
};

const QuestionTable = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 10;

    const handleEdit = (id) => {
        console.log('Edit question with id:', id);
    };

    const handleDelete = (id) => {
        console.log('Delete question with id:', id);
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
        <div className="overflow-x-auto w-11/12 flex flex-col justify-center items-center mt-16">
            <div className="mb-4 w-full">
                <input
                    type="text"
                    placeholder="Buscar perguntas por código ou título..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="px-4 py-2 border rounded w-full"
                />
            </div>
            <div className="overflow-auto w-full">
                <table className="w-full bg-white">
                    <thead>
                        <tr className='border-b text-left'>
                            <th className="px-4 py-4 w-1/6">Código</th>
                            <th className="px-4 py-4 w-4/6">Título</th>
                            <th className="px-4 py-4 w-1/6 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentQuestions.map((question) => (
                            <tr key={question.id} className="w-full bg-white border-b">
                                <td className="px-4 py-3 w-1/6">{generateCode(question.id)}</td>
                                <td className="px-4 py-3 w-4/6">{question.title}</td>
                                <td className="px-4 py-3 w-1/6 text-center">
                                    <button
                                        onClick={() => handleEdit(question.id)}
                                        className="text-white font-bold py-1 px-2 rounded mr-2"
                                    >
                                        <img src={Edit} alt="Edit"/>
                                    </button>
                                    <button
                                        onClick={() => handleDelete(question.id)}
                                        className="bg-white text-white font-bold py-1 px-2 rounded"
                                    >
                                        <img src={Delete} alt="Delete"/>
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
                className="flex justify-center mt-6 mb-6"
                pageClassName="mx-2"
                previousClassName="mx-2"
                nextClassName="mx-2"
                breakClassName="mx-2"
                activeClassName="font-bold"
            />
        </div>
    );
};

export default QuestionTable;