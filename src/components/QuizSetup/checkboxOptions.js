import React, { useState } from 'react';
import './checkboxOptionsStyles.css'; // Ensure the path to your CSS file is correct

const CheckboxOptions = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    setSelectedOptions(prevState =>
      prevState.includes(option)
        ? prevState.filter(item => item !== option)
        : [...prevState, option]
    );
  };

  return (
    <>
    <div className="flex flex-col w-11/12 md:w-[64rem] mt-8 font-inter-semi text-[17px]">
      <label className="w-full text-gray-700 mb-7 md:mb-3 mt-10 text-left">
          Selecione sub temas do módulo
        </label>
    </div>
    <div className="flex flex-col w-11/12 md:w-[64rem]    mt-8 ">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8'].map(option => (
          <label key={option} className="flex items-center justify-center space-x-3">
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className="custom-checkbox"
            />
            <span className="text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
    </>
  );
};

export default CheckboxOptions;