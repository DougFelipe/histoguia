import React, { useState } from 'react';
const Control = () => {
  const [questions, setQuestions] = useState(0);

  const handleQuestionsChange = (event) => {
    const value = Number(event.target.value);
    if (value <= 7) {
      setQuestions(0);
    } else if (value <= 22) {
      setQuestions(15);
    } else {
      setQuestions(30);
    }
  };

  return (
    <>
    <div className="flex flex-col w-11/12 md:w-[64rem] justify-center items-center mt-2 md:mt-12 font-inter-semi text-[17px]">
    <label htmlFor="questions" className="block w-full text-gray-700 mb-7 md:mb-3 mt-10 text-left">
          Indique o número de questões
        </label>
    </div>
    <div className="flex flex-col w-11/12 md:w-[64rem] justify-center items-center mt-2 md:mt-12">
      <div className="w-full md:w-6/12 rounded-lg font-inter-semi text-[17px]">
        <div className='flex flex-col items-center'>
          <input
            id="questions"
            type="range"
            min="0"
            max="30"
            step="1"
            value={questions}
            onChange={handleQuestionsChange}
            className="w-full md:w-11/12 h-2 bg-light-purple rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex w-full md:w-11/12 justify-between mt-2">
            <span className="text-primary pl-1 pr-2">0</span>
            <span className="text-primary">15</span>
            <span className="text-primary">30</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Control;