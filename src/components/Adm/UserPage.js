import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/Menu.js";

import avatar from "../../assets/img/Avatars.png";

const UserPage = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();
  const result = location.state || {};

  const handleBackClick = () => {
    navigate("/admAlunos");
  };

  const handleToggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <div className="flex h-full w-full bg-[#F1F0F3]">
      <Sidebar onToggle={handleToggleSidebar} />

      <div
        className={`flex-grow flex flex-col justify-center items-center transition-all duration-300 ${
          isSidebarOpen ? "md:ml-64" : "ml-0"
        }`}
      >
        <div className="flex flex-col items-center  text-primary p-8 rounded-lg w-11/12 md:w-11/12 lg:w-11/12 mx-auto mt-12">
          <div className="w-full">
            <span className="font-inter-semi text-[24px] text-[#130338]">
              Meus Dados
            </span>
          </div>
          <div className="w-full rounded-[20px] bg-white font-inter-medium mt-10 p-8">
            <div className="relative mb-4">
              <img
                src={avatar || "default-profile.png"}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover cursor-pointer"
              />
            </div>
            <div className="mb-4">
              <p className="block mb-2">Nome</p>
              <p className="w-full p-2 rounded-lg border-solid border-2 font-inter-regular  text-primary focus:border-[#130338]">
                {result.filteredItems[0].name}
              </p>
            </div>
            <div className="mb-4">
              <p className="block mb-2">Email</p>
              <p className="w-full p-2 rounded-lg border-solid border-2 font-inter-regular  text-primary focus:border-[#130338]">
                {result.filteredItems[0].email}
              </p>
            </div>
            <div className="mb-4">
              <p className="block mb-2">Telefone</p>
              <p className="w-full p-2 rounded-lg border-solid border-2 font-inter-regular  text-primary focus:border-[#130338]">
                {result.filteredItems[0].phone}
              </p>
            </div>
            <div className="mb-4">
              <p className="block mb-2">Data de Nascimento</p>
              <p className="w-full p-2 rounded-lg border-solid border-2 font-inter-regular  text-primary focus:border-[#130338]">
                {result.filteredItems[0].birthdate}
              </p>
            </div>
            <div className="mb-4">
              <p className="block mb-2">Curso</p>
              <p className="w-full p-2 rounded-lg border-solid border-2 font-inter-regular  text-primary focus:border-[#130338]">
                {result.filteredItems[0].course}
              </p>
            </div>
            <div className="mb-4">
              <p className="block mb-2">Universidade</p>
              <p className="w-full p-2 rounded-lg border-solid border-2 font-inter-regular  text-primary focus:border-[#130338]">
                {result.filteredItems[0].university}
              </p>
            </div>
            <div className="mb-4">
              <p className="block mb-2">Matricula</p>
              <p className="w-full p-2 rounded-lg border-solid border-2 font-inter-regular  text-primary focus:border-[#130338]">
                {result.filteredItems[0].registration}
              </p>
            </div>

            <div className="flex justify-center md:justify-start mt-6">
              <button
                type="button"
                onClick={handleBackClick}
                className="px-4 py-2 bg-white border-solid border-2 border-primary rounded hover:bg-gray-200"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
