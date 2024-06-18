import React, { useState } from "react";
import EditQuestionForm from "../components/Question/EditQuestion.js";
import AdmSidebar from "../components/Adm/MenuAdm.js";

function EditQuestion() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <div className="flex h-full w-full  bg-[#F1F0F3]">
      <AdmSidebar onToggle={handleToggleSidebar} />

      <div
        className={`flex-grow flex flex-col justaszify-center items-center transition-all duration-300 ${
          isSidebarOpen ? "md:ml-64" : "ml-0"
        }`}
      >
        <div className="w-full h-auto flex flex-col justify-start items-center mt-6">
          <EditQuestionForm />
        </div>
      </div>
    </div>
  );
}

export default EditQuestion;
