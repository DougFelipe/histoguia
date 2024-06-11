import React, { useState } from "react";
import AdmSidebar from "../components/Adm/MenuAdm";

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
        <div className="w-full h-full flex flex-col justify-start items-center mt-12">
          <h1>Teste</h1>
        </div>
      </div>
    </div>
  );
};

export default AdmAlunos;
