import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

const data = [
    { date: '2023-06-01', questions: 10, correct: 8, incorrect: 2 },
    { date: '2023-06-02', questions: 15, correct: 12, incorrect: 3 },
    { date: '2023-03-03', questions: 20, correct: 16, incorrect: 4 },
    { date: '2023-05-03', questions: 30, correct: 25, incorrect: 5 },
    { date: '2023-08-04', questions: 34, correct: 30, incorrect: 4 },
    { date: '2023-02-03', questions: 60, correct: 55, incorrect: 5 },
    { date: '2023-06-03', questions: 7, correct: 5, incorrect: 2 },
    { date: '2024-01-03', questions: 2, correct: 1, incorrect: 1 },
    { date: '2023-09-05', questions: 12, correct: 10, incorrect: 2 },
    { date: '2023-10-10', questions: 25, correct: 20, incorrect: 5 },
    { date: '2023-11-11', questions: 18, correct: 14, incorrect: 4 },
    { date: '2023-12-12', questions: 22, correct: 17, incorrect: 5 },
    { date: '2024-01-15', questions: 28, correct: 24, incorrect: 4 }
  ];

const Table = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [tableData, setTableData] = useState(data);

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    sortData(newSortOrder);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };
  const sortData = (order) => {
    const sortedData = [...tableData].sort((a, b) => {
      if (order === 'asc') {
        return new Date(a.date) - new Date(b.date);
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });
    setTableData(sortedData);
  };

  return (
    <div className="overflow-x-auto w-11/12 mt-8 rounded-[20px]">
      <table className="w-full divide-y divide-gray-200 rounded-[20px]">
        <thead className="bg-gray-50  ">
          <tr>
            <th className="px-2 md:px-6 py-5 text-left text-[16px] font-inter-semi font-medium text-[#534D59] tracking-wider">
              Data
              <button onClick={toggleSortOrder} className="ml-2 focus:outline-none">
                <FontAwesomeIcon icon={sortOrder === 'asc' ? faSortUp : faSortDown} />
              </button>
            </th>
            <th className="px-2 md:px-6 py-5 text-left text-[16px] font-inter-semi font-medium text-[#534D59] tracking-wider">
              N° de Questões
            </th>
            <th className="px-2 md:px-6 py-5 text-left text-[16px] font-inter-semi font-medium text-[#534D59] tracking-wider">
              Acertos
            </th>
            <th className="px-2 md:px-6 py-5 text-left text-[16px] font-inter-semi font-medium text-[#534D59] tracking-wider">
              Erros
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tableData.map((item, index) => (
            <tr key={index}>
              <td className="px-2 md:px-6 py-5 font-inter-regular whitespace-nowrap text-[14px] text-[#1B2128]">{formatDate(item.date)}</td>
              <td className="px-2 md:px-6 py-5  font-inter-regular whitespace-nowrap text-[14px] text-[#1B2128]">{item.questions}</td>
              <td className="px-2 md:px-6 py-5 font-inter-regular whitespace-nowrap text-[14px] text-green-500">{item.correct}</td>
              <td className="px-2 md:px-6 py-5  font-inter-regular whitespace-nowrap text-[14px] text-red-500">{item.incorrect}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;