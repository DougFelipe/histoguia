import React, { useState } from "react";
import Avatar from "../assets/img/Avatar.png";

const Sidebar = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="m-4 p-2 text-white bg-[#F1F0F3] rounded-lg  focus:outline-none absolute"
      >
        <svg
          width="25"
          height="19"
          viewBox="0 0 25 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.4"
            y1="1.6"
            x2="23.5243"
            y2="1.6"
            stroke="#140B2A"
            stroke-width="2.8"
            stroke-linecap="round"
          />
          <line
            x1="1.84683"
            y1="9.44165"
            x2="13.2685"
            y2="9.50401"
            stroke="#140B2A"
            stroke-width="2.8"
            stroke-linecap="round"
          />
          <line
            x1="2.13315"
            y1="16.9945"
            x2="22.7913"
            y2="16.9945"
            stroke="#140B2A"
            stroke-width="2.8"
            stroke-linecap="round"
          />
        </svg>
      </button>

      <div
        className={`fixed top-0 left-0  h-full w-80 bg-[#140B2A] shadow-lg transform z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
      >
        <div className="flex items-center justify-between px-4 py-6 bg-[#140B2A] text-white">
          <div className="flex">
            <img src={Avatar} className="rounded-3xl" />
            <div>
              <span className="px-2 text-[15px] text-white font-inter-semi">
                Eloisa Fernandes
              </span>
              <p className="px-2 text-[11px] text-white font-inter-medium">
                eloisafer16@gmail.com
              </p>
            </div>
          </div>
          <button
            onClick={toggleSidebar}
            className="focus:outline-none text-2xl"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.70708 5.29289C6.31655 4.90237 5.68339 4.90237 5.29286 5.29289C4.90234 5.68342 4.90234 6.31658 5.29286 6.70711L10.5857 12L5.29277 17.2929C4.90225 17.6834 4.90225 18.3166 5.29277 18.7071C5.6833 19.0976 6.31646 19.0976 6.70698 18.7071L11.9999 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4141 12L18.707 6.70711C19.0975 6.31658 19.0975 5.68342 18.707 5.29289C18.3165 4.90237 17.6833 4.90237 17.2928 5.29289L11.9999 10.5857L6.70708 5.29289Z"
                fill="#D1D3D4"
              />
            </svg>
          </button>
        </div>
        <nav className="px-3 ">
          <a
            href="/home"
            className="flex justify-left items-center my-3 py-3 px-3 text-gray-700 hover:bg-[#3D2E7C] rounded-[8px]"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.2861 1.21065C12.6472 0.929784 13.1528 0.929784 13.5139 1.21065L22.5139 8.21065C22.7575 8.4001 22.9 8.69141 22.9 9V20C22.9 20.7957 22.5839 21.5587 22.0213 22.1213C21.4587 22.6839 20.6956 23 19.9 23H5.89999C5.10434 23 4.34128 22.6839 3.77867 22.1213C3.21606 21.5587 2.89999 20.7957 2.89999 20V9C2.89999 8.69141 3.04247 8.4001 3.28605 8.21065L12.2861 1.21065ZM4.89999 9.48908V20C4.89999 20.2652 5.00535 20.5196 5.19289 20.7071C5.38042 20.8946 5.63478 21 5.89999 21H19.9C20.1652 21 20.4196 20.8946 20.6071 20.7071C20.7946 20.5196 20.9 20.2652 20.9 20V9.48908L12.9 3.26686L4.89999 9.48908Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.89999 12C8.89999 11.4477 9.34771 11 9.89999 11H15.9C16.4523 11 16.9 11.4477 16.9 12V22C16.9 22.5523 16.4523 23 15.9 23C15.3477 23 14.9 22.5523 14.9 22V13H10.9V22C10.9 22.5523 10.4523 23 9.89999 23C9.34771 23 8.89999 22.5523 8.89999 22V12Z"
                fill="white"
              />
            </svg>
            <span className="px-2 text-[15px] text-white font-inter-semi">
              Início
            </span>
          </a>

          <a
            href="/profile"
            className="flex justify-left my-3  items-center py-3 px-3 text-gray-700 hover:bg-[#3D2E7C] rounded-[8px]"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.56447 15.4645C5.50215 14.5268 6.77392 14 8.10001 14H16.1C17.4261 14 18.6979 14.5268 19.6355 15.4645C20.5732 16.4021 21.1 17.6739 21.1 19V21C21.1 21.5523 20.6523 22 20.1 22C19.5477 22 19.1 21.5523 19.1 21V19C19.1 18.2044 18.7839 17.4413 18.2213 16.8787C17.6587 16.3161 16.8957 16 16.1 16H8.10001C7.30436 16 6.5413 16.3161 5.97869 16.8787C5.41608 17.4413 5.10001 18.2044 5.10001 19V21C5.10001 21.5523 4.65229 22 4.10001 22C3.54772 22 3.10001 21.5523 3.10001 21V19C3.10001 17.6739 3.62679 16.4021 4.56447 15.4645Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.1 4C10.4432 4 9.10001 5.34315 9.10001 7C9.10001 8.65685 10.4432 10 12.1 10C13.7569 10 15.1 8.65685 15.1 7C15.1 5.34315 13.7569 4 12.1 4ZM7.10001 7C7.10001 4.23858 9.33858 2 12.1 2C14.8614 2 17.1 4.23858 17.1 7C17.1 9.76142 14.8614 12 12.1 12C9.33858 12 7.10001 9.76142 7.10001 7Z"
                fill="white"
              />
            </svg>
            <span className="px-2 text-[15px] text-white font-inter-semi">
              Meus Dados
            </span>
          </a>
          <a
            href="/admAlunos"
            className="flex justify-left my-3  items-center py-3 px-3 text-gray-700 hover:bg-[#3D2E7C] rounded-[8px]"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.41654 2.43007C9.63743 2.93625 9.40615 3.52567 8.89997 3.74656C7.55256 4.33454 6.3697 5.24365 5.45481 6.39439C4.53991 7.54512 3.92084 8.90246 3.6517 10.3477C3.38257 11.793 3.47158 13.2822 3.91094 14.6851C4.3503 16.088 5.12664 17.362 6.17208 18.3955C7.21753 19.4291 8.50025 20.1909 9.9081 20.6142C11.3159 21.0375 12.8061 21.1095 14.2482 20.8239C15.6903 20.5382 17.0404 19.9037 18.1807 18.9757C19.3209 18.0478 20.2164 16.8546 20.789 15.5006C21.0041 14.9919 21.5908 14.7539 22.0995 14.969C22.6082 15.1841 22.8461 15.7708 22.631 16.2795C21.9313 17.9344 20.8367 19.3927 19.4431 20.5269C18.0495 21.6611 16.3993 22.4367 14.6367 22.7858C12.8742 23.1348 11.0529 23.0469 9.33221 22.5295C7.6115 22.0121 6.04374 21.0811 4.76597 19.8178C3.4882 18.5546 2.53934 16.9975 2.00235 15.2828C1.46535 13.5682 1.35656 11.748 1.6855 9.98159C2.01444 8.21515 2.77109 6.55618 3.8893 5.14973C5.0075 3.74327 6.45322 2.63214 8.10005 1.91349C8.60624 1.6926 9.19565 1.92388 9.41654 2.43007Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.7929 1.29289C11.9804 1.10536 12.2348 1 12.5 1C13.9445 1 15.3749 1.28452 16.7095 1.83733C18.0441 2.39013 19.2567 3.20038 20.2782 4.22183C21.2996 5.24327 22.1099 6.4559 22.6627 7.79048C23.2155 9.12506 23.5 10.5555 23.5 12C23.5 12.5523 23.0523 13 22.5 13H12.5C11.9477 13 11.5 12.5523 11.5 12V2C11.5 1.73478 11.6054 1.48043 11.7929 1.29289ZM13.5 3.05573V11H21.4443C21.3505 10.1614 21.1391 9.33849 20.8149 8.55585C20.3626 7.46392 19.6997 6.47177 18.864 5.63604C18.0282 4.80031 17.0361 4.13738 15.9442 3.68508C15.1615 3.3609 14.3386 3.14949 13.5 3.05573Z"
                fill="white"
              />
            </svg>
            <span className="px-2 text-[15px] text-white font-inter-semi">
              Estatísticas
            </span>
          </a>

          

          <a
            href="#"
            className="flex justify-left my-3  items-center py-3 px-3 text-gray-700 hover:bg-[#3D2E7C] rounded-[8px]"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.3 3C7.32946 3 3.30002 7.02944 3.30002 12C3.30002 16.9706 7.32946 21 12.3 21C17.2706 21 21.3 16.9706 21.3 12C21.3 7.02944 17.2706 3 12.3 3ZM1.30002 12C1.30002 5.92487 6.22489 1 12.3 1C18.3752 1 23.3 5.92487 23.3 12C23.3 18.0751 18.3752 23 12.3 23C6.22489 23 1.30002 18.0751 1.30002 12Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.3 5C12.8523 5 13.3 5.44772 13.3 6V11.382L16.7472 13.1056C17.2412 13.3526 17.4414 13.9532 17.1944 14.4472C16.9475 14.9412 16.3468 15.1414 15.8528 14.8944L11.8528 12.8944C11.514 12.725 11.3 12.3788 11.3 12V6C11.3 5.44772 11.7477 5 12.3 5Z"
                fill="white"
              />
            </svg>
            <span className="px-2 text-[15px] text-white font-inter-semi">
              Histórico
            </span>
          </a>
        </nav>
        <div className="w-full px-3 py-1 absolute m-absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <a
            href="/"
            className="flex justify-center my-4 w-100 items-center py-2 px-3 bg-[#ffffff]  hover:bg-[#ffffff] rounded-[8px]"
          >
            <span className="px-2 text-[15px]  text-[#130338] font-inter-regular">
              Sair
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
