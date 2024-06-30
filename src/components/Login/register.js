import React, { useState } from "react";
import Input from "./input";
import axios from "axios";

function Register(props) {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    birthDate: "",
    course: "",
    registration: "",
    university: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    axios.post("http://localhost:8080/api/users/register", formData)
      .then(response => {
        console.log("User registered:", response.data);
      })
      .catch(error => {
        console.error("There was an error registering the user!", error);
      });
  };

  return (
    <div
      className={`bg-[#3D2E7C] w-[435px] h-[573px] flex flex-col items-center ${props.hidden} max-md:w-[340px] max-md:h-screen`}
    >
      <h1 className="text-[#F7F6F6] font-semibold text-3xl pt-[75px] mb-[30px] mx-[160px] max-md:mx-[90px] max-md:text-[32px] max-md:mb-[25px]">
        Register
      </h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Your First Name" onChange={handleChange} />
        <Input type="text" name="lastName" placeholder="Your Last Name" onChange={handleChange} />
        <Input type="email" name="email" placeholder="E-mail" onChange={handleChange} />
        <Input type="password" name="password" placeholder="Password" onChange={handleChange} />
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
