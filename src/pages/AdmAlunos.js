import React, { useState } from "react";
import AdmSidebar from "../components/Adm/MenuAdm";
import SearchBarAluno from "../components/Adm/SearchBarAluno";

const AdmAlunos = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <div className="flex h-full w-full bg-[#F1F0F3]">
      <AdmSidebar onToggle={handleToggleSidebar} />
      <div
        className={`flex-grow transition-all duration-300 ${
          isSidebarOpen ? "md:ml-64" : "ml-0"
        }`}
      >
        <div className="flex flex-row justify-between items-center mt-12 pl-[100px] p-4">
          <p className="text-[24px] font-semibold">Alunos</p>
          <button className="w-[140px] h-[48px] bg-[#7839CD] text-[#FFFFFF] rounded-lg">
            <span className="mr-[10px]">Download</span>
            <i class="fa fa-cloud-download" aria-hidden="true"></i>
          </button>
        </div>

        <div className="flex flex-row justify-end items-center mt-4">
          <SearchBarAluno />
        </div>
      </div>
    </div>
  );
};

export default AdmAlunos;
