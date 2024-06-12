import React, { useState, useEffect } from "react";
import { alunos } from "./Alunos";

const SearchBarAluno = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

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
            <div className="bg-[#FFFFFF] flex flex-row gap-[20px] items-center px-[20px] py-[15px] font-semibold text-[20px] rounded-t-lg">
              <div className="w-[40px] h-[40px] mr-[10px] border-solid border-[3px] border-[#E4E4E4] rounded-lg"></div>
              <p className="w-[300px]">Users</p>
              <p className="w-[107px]">Status</p>
              <p className="w-[300px]">E-mail</p>
              <p className="w-[100px]">Birthday</p>
            </div>
            {results.map((result, index) => (
              <div
                key={index}
                className="px-[20px] py-[10px] bg-white shadow-lg flex flex-row items-center"
              >
                <div className="w-[40px] h-[40px] mr-[30px] border-solid border-[3px] border-[#E4E4E4] rounded-lg"></div>
                <div className="w-[330px] flex flex-row">
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
                <div className="w-[120px]">
                  <span className="w-[100px] block text-left text-[12px] font-[#9098A3] font-inter-regular">
                    {typeof result.status === "number"
                      ? `${result.status}%`
                      : result.status}
                  </span>
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBarAluno;
