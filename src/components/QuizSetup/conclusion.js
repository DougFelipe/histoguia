import React, { useState } from "react";
import Sidebar from "../Menu";

import { useLocation } from "react-router-dom";

const Conclusion = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();
  const result = location.state || {};

  const handleToggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <div className="flex h-full w-full bg-[#F1F0F3]">
      <Sidebar onToggle={handleToggleSidebar} />
      <div
        className={`flex-grow transition-all duration-300 ${
          isSidebarOpen ? "md:ml-64" : "ml-0"
        }`}
      >
        <div className="w-full h-full flex flex-col justify-center items-center">
          <p className="font-semibold text-[30px] text-[#130338] mt-[20%] max-md:text-[25px]">
            Parabéns!!! Questionário Concluído
          </p>
          <p className="text-[20px] mt-[30px] text-[#130338]">
            Você Acertou {result.acertos} Questões...
          </p>
          <a
            href="/quizSetup"
            type="submit"
            className="ml-3 px-16 py-4 bg-primary  text-white rounded-[28px] mt-8 hover:bg-[#3D2E7C]"
          >
            Iniciar um Novo Quiz
          </a>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
