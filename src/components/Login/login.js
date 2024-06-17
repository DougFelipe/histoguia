import Icon from "./icon";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (user === "admin") {
      navigate("/admAlunos");
    } else {
      navigate("/home");
    }
  };
  const handleChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <div className="bg-[#F1F0F3] w-[740px] h-[573px] flex flex-col items-center max-md:h-full ">
      <h1 className="mx-[225px] mt-[75px] mb-[20px] text-[60px] text-[#3D2E7C] font-medium max-md:mx-[30px] max-md:text-[45px] max-md:mb-[10px]">
        Histo <span className="text-[#8D8D8D] font-bold">Guia</span>
      </h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-[328px] h-[46px] mx-[202.5px] mb-[20px] px-[20px] bg-[#F1F0F3] text-[#6C6A6A] font-regular border-solid border-2 border-[#6C6A6A]/[.6] hover:border-[#6C6A6A] focus:border-[#6C6A6A] outline-none rounded-lg placeholder:text-[#6C6A6A] placeholder:font-regular max-md:mx-[25px] max-md:w-[250px]"
          value={user}
          onChange={handleChange}
          placeholder="Enter email"
        />
        <input
          type="password"
          className="w-[328px] h-[46px] mx-[202.5px] mb-[10px] px-[20px] bg-[#F1F0F3] text-[#6C6A6A] font-regular border-solid border-2 border-[#6C6A6A]/[.6] hover:border-[#6C6A6A] focus:border-[#6C6A6A] outline-none rounded-lg placeholder:text-[#6C6A6A] placeholder:font-regular max-md:mx-[25px] max-md:w-[250px]"
          placeholder="Enter password"
        />

        <a
          href="#"
          className="text-[#3D2E7C] font-regular ml-[403px] max-md:ml-[155px] max-md:text-[14px]"
        >
          Forget Password?
        </a>
        {/*<Link
          to="/home"
          className="w-[328px] h-[46px] mx-[202.5px] mt-[20px] bg-[#3D2E7C] text-[#FFFFFF] text-[18px] font-regular rounded-lg flex items-center justify-center max-md:mx-[25px] max-md:w-[250px]"
        >
          Login
        </Link>*/}
        <input
          type="submit"
          value="Login"
          className="w-[328px] h-[46px] mx-[202.5px] mt-[20px] bg-[#3D2E7C] text-[#FFFFFF] text-[18px] font-regular rounded-lg"
        />
      </form>
      <p className="text-[#757171] mx-[315px] mt-[15px] mb-[20px] max-md:mx-[104px] max-md:text-[14px]">
        Or sign up with
      </p>

      <div className="flex gap-[22px] mx-[235px] max-md:mx-[50px] max-md:gap-[18px]">
        <Icon src="fa-brands fa-google fa-2xl" />
        <Icon src="fa-brands fa-apple fa-2xl" />
        <Icon src="fa-brands fa-square-facebook fa-2xl" />
      </div>

      <Link
        to={"/register"}
        className="hidden  mt-[15px] mx-[120px] text-[14px] text-[#130338] max-md:block"
      >
        Register
      </Link>
    </div>
  );
}

export default Login;
