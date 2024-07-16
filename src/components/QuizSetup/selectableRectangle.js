import React, { useState } from 'react';

const SelectableRectangles = ({ onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (rectangle) => {
    setSelected(rectangle);
    onSelect(rectangle);
  };

  return (
    <div className="flex flex-col items-center w-11/12 md:w-[64rem]">
      <label className="block w-full font-inter-semi text-[17px] text-gray-700 mb-6 mt-8 md:mt-16">
        Indique o número de questões
      </label>
      <div className="flex flex-col w-full items-center justify-beteween md:flex-row md:space-x-8 space-y-4 md:space-y-0">
        <div
          onClick={() => handleSelect('Teórico')}
          className={`font-inter-semi flex-col p-6 w-11/12 md:w-[26rem]  h-40 flex items-start justify-center cursor-pointer rounded-lg shadow-lg ${selected === 'Teórico' ? 'border-solid border-4 border-[#3D2E7C]' : 'bg-gray-200 border-4 border-gray-200'
            }`}
        >
          <span className='text-[#6B7280] text-[14px] font-inter-light'>Selecione o módulo</span>
          <span className='text-primary text-[26px]'>Módulo Teórico</span>
          <span className='text-[#6B7280] text-[14px] font-inter-light border-dotted border-2 border-primary rounded-md p-2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div
          onClick={() => handleSelect('Prático')}
          className={`font-inter-semi flex-col p-6 w-11/12 md:w-[26rem] h-40 flex items-start justify-center cursor-pointer rounded-lg shadow-lg ${selected === 'Prático' ? 'border-solid border-4 border-[#3D2E7C]' : 'bg-gray-200 border-4 border-gray-200'
            }`}
        >
          <span className='text-[#6B7280] text-[14px] font-inter-light'>Selecione o módulo</span>
          <span className='text-primary text-[26px]'>Módulo Prático</span>
          <span className='text-[#6B7280] text-[14px] font-inter-light border-dotted border-2 border-primary rounded-md p-2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        
      </div>
    </div>
  );
};

export default SelectableRectangles;