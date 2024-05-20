import React from "react";
import Input from "./input";

function Register() {
  return (
    <div className="bg-[#3D2E7C] w-[435px] h-[573px]">
      <h1 className="text-[#F7F6F6] font-semibold text-3xl pt-[75px] pb-[30px] px-[160px]">
        Register
      </h1>
      <form className="flex flex-col">
        <Input type="text" placeholder="Your First Name"></Input>
        <Input type="text" placeholder="Your Last Name"></Input>
        <Input type="email" placeholder="E-mail"></Input>
        <Input type="password" placeholder="Password"></Input>
        <input
          type="submit"
          value={"Sing Up"}
          className="w-[328px] h-[46px] mx-[55px] bg-[#F1F0F3] text-[#130338] text-[18px] font-semibold rounded-lg"
        />
      </form>
    </div>
  );
}

export default Register;
