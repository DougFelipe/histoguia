import React from "react";
import Input from "./input";

function Register(props) {
  return (
    <div
      className={`bg-[#3D2E7C] w-[435px] h-[573px] ${props.hidden} max-md:w-screen max-md:h-screen`}
    >
      <h1 className="text-[#F7F6F6] font-semibold text-3xl pt-[75px] mb-[30px] mx-[160px] max-md:mx-[90px] max-md:text-[32px] max-md:mb-[25px]">
        Register
      </h1>
      <form className="flex flex-col">
        <Input type="text" placeholder="Your First Name" />
        <Input type="text" placeholder="Your Last Name" />
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Password" />
        <input
          type="submit"
          value={"Sing Up"}
          className="w-[328px] h-[46px] mx-[55px] bg-[#F1F0F3] text-[#130338] text-[18px] font-semibold rounded-lg max-md:mx-[30px] max-md:w-[250px]"
        />
      </form>
    </div>
  );
}

export default Register;
