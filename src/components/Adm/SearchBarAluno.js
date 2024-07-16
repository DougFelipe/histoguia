import React, { useState, useEffect } from "react";
import { alunos } from "./Alunos";
import Status from "./Status";
import Delete from "../../assets/icons/delete.svg";
import Info from "../../assets/icons/info.svg";
import Filter from "../../assets/icons/download-cloud.svg";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/img/Avatars.png";

const SearchBarAluno = () => {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [results, setResults] = useState([]);
  const [dataAux, setDataAux] = useState([]);
  const [hidden, setHidden] = useState("hidden");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/users/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          const newData = data.filter((item) =>
            item.role.toLowerCase().includes("USER".toLowerCase())
          );
          setResults(newData);
          setDataAux(newData);
        } else {
          const errorMessage = await response.text();
          console.log(errorMessage);
        }
      } catch (error) {
        console.log("An error occurred. Please try again.");
      }
    };
    fetchUsers();
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value) {
      const filteredItems = results.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredItems);
    } else {
      setResults(dataAux);
    }
  };

  const handleClick = () => {
    if (hidden === "hidden") {
      setHidden("block");
    } else {
      setHidden("hidden");
    }
  };

  /*const handleStatusClick = (status) => {
    const value = status;
    if (value !== "All") {
      setStatus(value);
      const filteredItems = items.filter((item) => item.status === value);
      setResults(filteredItems);
    } else {
      setResults(items);
    }
  };*/

  const pageInfo = (pos) => {
    const filteredItems = results.filter((item, index) => index === pos);
    navigate("/userPage", {
      state: { filteredItems },
    });
  };

  const deleteAluno = async (pos) => {
    try {
      const filteredItems = results.filter((item, index) => index === pos);

      const response = await fetch(
        `http://localhost:8080/api/users/delete/${filteredItems[0].id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        console.log("User deleted successfully.");
        const filteredItems = results.filter((item, index) => index !== pos);
        setResults(filteredItems);
      } else {
        const errorMessage = await response.text();
        console.log(errorMessage);
      }
    } catch (error) {
      console.log("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-10/12 p-0 mr-8 max-md:p-0 max-md:w-[250px]">
      <div className="w-full max-md:w-[250px]">
        <div className="relative flex flex-row justify-end gap-4 max-md:flex-col">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none max-md:top-[-65px]">
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
            className="w-full p-2 pl-10 border rounded-[50px] focus:outline-none focus:ring-2 focus:ring-gray-300 text-[14px] font-inter-regular max-md:w-[320px]"
          />
          <div>
            <div
              className="w-[140px] h-[48px] flex flex-row justify-center items-center text-[#7839CD] bg-[#F1F0F3] border-2 border-[#7839CD] rounded-lg cursor-pointer max-md:w-[320px]"
              onClick={handleClick}
            >
              <span className="mr-[10px] font-semibold">Filter</span>
              <div className="w-[25px] max-md:w-[20px]">
                <img src={Filter} alt="Icone de Filtro" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            className={`absolute w-[200px] h-[170px] bg-white rounded-lg mt-4 right-4 shadow-lg ${hidden} max-md:right-[-60px]`}
          >
            <p className="font-semibold text-[20px] text-center p-2">Status</p>
            <div className="flex flex-col items-center gap-2 cursor-pointer">
              <div>
                <Status status="All" value={status} />
              </div>
              <div>
                <Status status="Active" value={status} />
              </div>
              <div>
                <Status status="Offline" value={status} />
              </div>
              <div>
                <Status status="Wait" value={status} />
              </div>
            </div>
          </div>
        </div>
        {results.length > 0 && (
          <div className="mt-6 gap-4 divide-y divide-gray max-md:mt-2 max-md:mb-6">
            <div className="bg-[#FFFFFF] flex flex-row justify-center items-center px-[20px] py-[15px] font-semibold text-[20px] rounded-t-lg max-md:hidden">
              <p className="w-[360px]">Users</p>
              <p className="w-[180px]">Status</p>
              <p className="w-[350px]">E-mail</p>
              <p className="w-[180px]">Birthday</p>
              <p className="w-[180px]"></p>
            </div>
            {results.map((result, index) => (
              <div
                key={index}
                className={`px-[20px] py-[10px] bg-white flex flex-row items-center justify-between max-md:flex-col max-md:gap-4 max-md:w-[320px] max-md:mb-[10px] max-md:rounded-lg max-md:items-start`}
                id={index}
              >
                <div className="flex max-md:flex-row-reverse max-md:gap-4">
                  <div className="w-[310px] flex flex-row">
                    <img
                      className="w-[40px] h-[40px] rounded-[12px]"
                      src={avatar}
                      alt={result.firstName}
                    />
                    <div className="flex flex-col justify-center ml-[10px]">
                      <div className="flex flex-row gap-1">
                        <span className="text-left text-[14px] font-primary font-inter-semi max-md:text-[12px]">
                          {result.name}
                        </span>
                      </div>
                      <span className="text-left text-[14px] text-[#959595] font-inter">
                        {result.username}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[180px] flex justify-between max-md:w-[280px] max-md:flex-row">
                  <span className="hidden text-[#959595] text-[15px] p-0 max-md:block">
                    Status
                  </span>
                  <Status status="Active" />
                </div>

                <div className="w-[350px] items-center flex justify-between max-md:flex-row max-md:w-[280px]">
                  <span className="hidden text-[#959595] text-[15px] p-0 max-md:block">
                    Email
                  </span>
                  <span className="block text-left text-[12px] font-[#9098A3] font-inter-regular">
                    {result.email}
                  </span>
                </div>
                <div className="w-[180px] flex justify-between max-md:w-[280px] max-md:flex-row ">
                  <span className="hidden text-[#959595] text-[15px] p-0 max-md:block">
                    Birthday
                  </span>
                  <span className="block text-left text-[12px] font-[#9098A3] font-inter-regular">
                    {result.birthdate}
                  </span>
                </div>
                <div className="flex max-md:flex-row">
                  <div className="w-[80px] max-md:w-[40px]">
                    <div className="w-[50px] max-md:w-[20px] cursor-pointer">
                      <img
                        src={Info}
                        alt="Icone de Info"
                        onClick={() => pageInfo(index)}
                      />
                    </div>
                  </div>
                  <div className="w-[80px] max-md:w-[20px] cursor-pointer">
                    <img
                      src={Delete}
                      alt="Icone de Delete"
                      onClick={() => deleteAluno(index)}
                    />
                  </div>
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
