import React, { useState } from "react";

const AdmSidebar = ({ onToggle }) => {
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
        className={`fixed top-0 left-0  h-full w-80 bg-[#140B2A] shadow-lg transform z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex items-center justify-between p-4 bg-[#140B2A] text-white">
          <div>
            <span className="px-2 text-[15px] text-white font-inter-semi">
              João Fernandes
            </span>
            <p className="px-2 text-[11px] text-white font-inter-medium">
              joao.fernandes.706@ufrn.edu.br
            </p>
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
        <nav className="px-3 py-1">
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
              Alunos
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
            href="/quizSetup"
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
                d="M10.0806 7.2746H13.3066M10.0806 10.9615H16.0718M10.0806 14.6484H16.0718"
                stroke="white"
                stroke-width="0.9132"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.0595 15.4429C21.1407 14.6443 21.1407 13.6444 21.1407 12.3823L21.1407 9.77993C21.1409 8.814 21.141 8.19108 20.973 7.60153C20.8809 7.27831 20.7518 6.96679 20.5884 6.6731C20.2904 6.13739 19.8498 5.69701 19.1667 5.01414L19.0229 4.87039C18.34 4.18725 17.8997 3.74668 17.364 3.44864C17.0703 3.28524 16.7587 3.1562 16.4355 3.06407C15.846 2.89602 15.2231 2.89615 14.2571 2.89635L13.0756 2.89636V2.89836C12.2135 2.90353 11.4879 2.92205 10.8755 2.9884C10.0043 3.08279 9.28081 3.28056 8.65875 3.73252C8.28707 4.00256 7.96021 4.32942 7.69016 4.70111C7.40235 5.09724 7.21762 5.53451 7.09702 6.02486L6.34132 6.22735C4.00571 6.85318 2.61966 9.25389 3.24548 11.5895L5.27324 19.1572C5.89906 21.4928 8.29978 22.8788 10.6354 22.253L15.9773 20.8217C16.9975 20.5483 17.8365 19.9363 18.4059 19.1389C18.6859 19.0413 18.9477 18.9147 19.1949 18.7495C19.673 18.4301 20.0834 18.0196 20.4028 17.5416C20.8021 16.9441 20.9762 16.2611 21.0595 15.4429ZM14.2682 4.27897L14.1555 4.27894C12.7714 4.27896 11.7861 4.28041 11.0244 4.36294C10.2709 4.44458 9.81851 4.59887 9.47142 4.85105C9.21711 5.03582 8.99346 5.25946 8.8087 5.51377C8.55652 5.86086 8.40223 6.31321 8.32058 7.06678C8.23754 7.83328 8.23659 8.82617 8.23659 10.2241V12.344C8.23659 13.6529 8.23742 14.5826 8.31071 15.303C8.38282 16.0118 8.51931 16.441 8.74144 16.7734C8.95999 17.1005 9.24083 17.3814 9.56792 17.5999C9.90036 17.8221 10.3295 17.9585 11.0384 18.0307C11.7588 18.1039 12.6884 18.1048 13.9973 18.1048C15.3063 18.1048 16.2359 18.1039 16.9563 18.0307C17.6651 17.9585 18.0943 17.8221 18.4268 17.5999C18.7539 17.3814 19.0347 17.1005 19.2533 16.7734C19.4754 16.441 19.6119 16.0118 19.684 15.303C19.7573 14.5826 19.7581 13.6529 19.7581 12.344V10.0397C19.7581 9.58566 19.7566 9.31466 19.7305 9.12044C19.7186 9.03144 19.7045 8.98686 19.6962 8.96679C19.6943 8.96214 19.6928 8.95908 19.6919 8.9573L19.6906 8.95506L19.6884 8.95379C19.6866 8.95286 19.6835 8.95137 19.6789 8.94945C19.6588 8.94119 19.6142 8.9271 19.5252 8.91513C19.331 8.88902 19.06 8.88755 18.606 8.88755L17.643 8.88755C17.2441 8.8876 16.8783 8.88764 16.5807 8.84764C16.2531 8.80359 15.9068 8.69994 15.6219 8.41511C15.3371 8.13028 15.2335 7.78396 15.1894 7.45631C15.1494 7.15877 15.1495 6.793 15.1495 6.39406L15.1495 5.24675C15.1495 4.88573 15.1486 4.67049 15.1315 4.51328C15.1215 4.4208 15.1088 4.38291 15.104 4.37192C15.0906 4.35385 15.0746 4.33785 15.0565 4.32442C15.0455 4.31969 15.0076 4.30694 14.9152 4.29692C14.7709 4.2813 14.5779 4.27921 14.2682 4.27897ZM15.6459 19.479C15.1627 19.4874 14.6281 19.4874 14.0357 19.4874H13.959C12.697 19.4874 11.697 19.4874 10.8985 19.4061C10.0803 19.3229 9.39727 19.1487 8.7998 18.7495C8.32174 18.4301 7.91129 18.0196 7.59186 17.5416C7.19264 16.9441 7.01845 16.2611 6.93522 15.4429C6.85399 14.6444 6.854 13.6444 6.854 12.3823V10.183C6.854 9.13119 6.85399 8.24983 6.89775 7.50961L6.69916 7.56282C5.10111 7.99102 4.15276 9.63362 4.58096 11.2317L6.60871 18.7993C7.03691 20.3974 8.6795 21.3457 10.2775 20.9175L15.6194 19.4862C15.6283 19.4838 15.6371 19.4814 15.6459 19.479ZM19.3802 7.34529C19.4124 7.40306 19.4426 7.46185 19.4708 7.52154C19.2245 7.5049 18.9451 7.50493 18.6472 7.50496L17.6842 7.50497C17.2302 7.50497 16.9592 7.5035 16.765 7.47739C16.676 7.46542 16.6314 7.45133 16.6113 7.44307C16.6067 7.44115 16.6036 7.43966 16.6018 7.43873L16.5996 7.43746L16.5983 7.43522C16.5974 7.43344 16.5959 7.43038 16.594 7.42573C16.5857 7.40566 16.5716 7.36108 16.5597 7.27208C16.5336 7.07786 16.5321 6.80686 16.5321 6.35282L16.5321 5.21422C16.5321 4.9821 16.5321 4.76393 16.522 4.56931C16.5794 4.59665 16.6361 4.62583 16.6918 4.65682C17.0379 4.84941 17.3376 5.1404 18.1171 5.91991C18.8967 6.69942 19.1876 6.99912 19.3802 7.34529Z"
                fill="white"
              />
            </svg>
            <span className="px-2 text-[15px] text-white font-inter-semi">
              Banco de Questões
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

export default AdmSidebar;
