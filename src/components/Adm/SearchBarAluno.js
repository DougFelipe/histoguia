import React, { useState, useEffect } from "react";
import { alunos } from "./Alunos";
import Status from "./Status";

const SearchBarAluno = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [check, setCheck] = useState(false);
  const [color, setColor] = useState("#ffffff");

  const items = alunos;

  useEffect(() => {
    setResults(items);
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value) {
      const filteredItems = items.filter((item) =>
        item.nome.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredItems);
    } else {
      setResults(items);
    }
  };

  const handleChecked = (event) => {
    if (check === false) {
      setColor("#F9FAFC");
    } else {
      setColor("#ffffff");
    }
    setCheck(event.target.checked);
  };

  return (
    <div className="flex flex-col items-center justify-center w-11/12 p-4">
      <div className="w-full">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-500"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.3333 9.64711C14.3333 6.51751 11.7962 3.98047 8.66664 3.98047C5.53704 3.98047 3 6.51751 3 9.64711C3 12.7767 5.53704 15.3138 8.66664 15.3138C11.7962 15.3138 14.3333 12.7767 14.3333 9.64711ZM17.3333 9.64711C17.3333 4.86066 13.4531 0.980469 8.66664 0.980469C3.88019 0.980469 0 4.86066 0 9.64711C0 14.4336 3.88019 18.3138 8.66664 18.3138C9.69555 18.3138 10.6826 18.1345 11.5982 17.8054C11.6416 18.0873 11.7462 18.3643 11.9161 18.6166L14.2852 22.1361C14.902 23.0524 16.1448 23.2953 17.0611 22.6785C17.9774 22.0617 18.2202 20.8188 17.6034 19.9025L15.2343 16.383C15.0908 16.1697 14.9134 15.993 14.7141 15.8551C16.3299 14.2808 17.3333 12.0812 17.3333 9.64711Z"
                fill="#767676"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleInputChange}
            className="w-full p-2 pl-10 border rounded-[50px] focus:outline-none focus:ring-2 focus:ring-gray-300 text-[14px] font-inter-regular"
          />
        </div>
        {results.length > 0 && (
          <div className="mt-6 gap-4 divide-y divide-gray">
            <div className="bg-[#FFFFFF] flex flex-row items-center px-[20px] py-[15px] font-semibold text-[20px] rounded-t-lg">
              <label
                class="relative flex items-center mr-[30px] rounded-full cursor-pointer"
                htmlFor="check"
              >
                <input
                  type="checkbox"
                  class="before:content[''] peer relative h-[40px] w-[40px] cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="check"
                  checked={check}
                  onChange={handleChecked}
                />
                <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <p className="w-[320px]">Users</p>
              <p className="w-[150px]">Status</p>
              <p className="w-[320px]">E-mail</p>
              <p className="w-[110px]">Birthday</p>
            </div>
            {results.map((result, index) => (
              <div
                key={index}
                className={`px-[20px] py-[10px] bg-[${color}] flex flex-row items-center`}
                id={index}
              >
                <label
                  class="relative flex items-center mr-[30px] rounded-full cursor-pointer"
                  htmlFor="check"
                >
                  <input
                    type="checkbox"
                    class="before:content[''] peer relative h-[40px] w-[40px] cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="check"
                    checked={check}
                    onChange={handleChecked}
                  />
                  <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <div className="w-[320px] flex flex-row">
                  <img
                    className="w-[40px] h-[40px] rounded-[12px]"
                    src={result.img}
                    alt={result.nome}
                  />
                  <div className="flex flex-col justify-center ml-[10px]">
                    <span className="text-left text-[14px] font-primary font-inter-semi">
                      {result.nome}
                    </span>
                    <span className="text-left text-[14px] text-[#959595] font-inter">
                      {result.username}
                    </span>
                  </div>
                </div>
                <div className="w-[150px]">
                  <Status status={result.status} />
                </div>

                <div className="w-[330px]">
                  <span className="block text-left text-[12px] font-[#9098A3] font-inter-regular">
                    {result.email}
                  </span>
                </div>
                <div className="w-[100px]">
                  <span className="block text-left text-[12px] font-[#9098A3] font-inter-regular">
                    {result.birthday}
                  </span>
                </div>
                <div className="w-[80px]">
                  <i className="fa-solid fa-circle-info fa-xl"></i>
                </div>
                <div className="w-[50px]">
                  <i className="fa-regular fa-trash-can fa-xl"></i>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBarAluno;
