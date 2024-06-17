import React, { useState } from "react";
import Sidebar from "../components/Menu";
import Table from "../components/Historic/Table";
import avatar from "../assets/img/Avatar.png";

const Historic = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  const data = [
    {
      nome: "Jane Cooper",
      username: "@jane",
      img: avatar,
      status: "Active",
      email: "jessica.hanson@example.com",
      birthday: "3/5/12",
    },
    {
      nome: "Wade Warren",
      username: "@wade",
      img: avatar,
      status: "Offline",
      email: "willie.jennings@example.com",
      birthday: "7/8/12",
    },
    {
      nome: "Jane Cooper",
      username: "@jane",
      img: avatar,
      status: "Active",
      email: "jessica.hanson@example.com",
      birthday: "3/5/12",
    },
    {
      nome: "Jane Cooper",
      username: "@jane",
      img: avatar,
      status: "Wait",
      email: "jessica.hanson@example.com",
      birthday: "3/5/12",
    },
    {
      nome: "Jane Cooper",
      username: "@jane",
      img: avatar,
      status: "Offline",
      email: "jessica.hanson@example.com",
      birthday: "3/5/12",
    },
    {
      nome: "Jane Cooper",
      username: "@jane",
      img: avatar,
      status: "Active",
      email: "jessica.hanson@example.com",
      birthday: "3/5/12",
    },
  ];

  return (
    <div className="flex h-full w-full  bg-[#F1F0F3]">
      <Sidebar onToggle={handleToggleSidebar} />

      <div
        className={`flex-grow flex flex-col justify-center items-center transition-all duration-300 ${
          isSidebarOpen ? "md:ml-64" : "ml-0"
        }`}
      >
        <div className="w-full h-auto flex flex-col justify-start items-center mt-20 mb-10">
          <div className="w-11/12">
            <span className="font-inter-semi text-[24px] text-[#130338]">
              Histórico
            </span>
          </div>
          <Table data={data} />
        </div>
      </div>
    </div>
  );
};

export default Historic;
