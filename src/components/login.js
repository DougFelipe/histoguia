import Icon from "./icon";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="bg-[#F1F0F3] w-[740px] h-[573px]">
      <h1 className="mx-[225px] mt-[75px] mb-[20px] text-[60px] text-[#3D2E7C] font-medium">
        Histo <span className="text-[#8D8D8D] font-bold">Guia</span>
      </h1>
      <form className="flex flex-col">
        <input
          type="email"
          className="w-[328px] h-[46px] mx-[202.5px] mb-[20px] px-[20px] bg-[#F1F0F3] text-[#6C6A6A] font-regular border-solid border-2 border-[#6C6A6A]/[.6] hover:border-[#6C6A6A] focus:border-[#6C6A6A] outline-none rounded-lg placeholder:text-[#6C6A6A] placeholder:font-regular"
          placeholder="Enter email"
        />
        <input
          type="password"
          className="w-[328px] h-[46px] mx-[202.5px] mb-[10px] px-[20px] bg-[#F1F0F3] text-[#6C6A6A] font-regular border-solid border-2 border-[#6C6A6A]/[.6] hover:border-[#6C6A6A] focus:border-[#6C6A6A] outline-none rounded-lg placeholder:text-[#6C6A6A] placeholder:font-regular"
          placeholder="Enter password"
        />

        <a href="#"  className="text-[#3D2E7C] font-regular ml-[403px]">
          Forget Password?
        </a>
        <Link 
          to="/quiz" 
          className="w-[328px] h-[46px] mx-[202.5px] mt-[20px] bg-[#3D2E7C] text-[#FFFFFF] text-[18px] font-regular rounded-lg flex items-center justify-center"
        >
          Login
        </Link>
        {/* <input
        href = "/quiz"
          type="submit"
          value="Login"
          className="w-[328px] h-[46px] mx-[202.5px] mt-[20px] bg-[#3D2E7C] text-[#FFFFFF] text-[18px] font-regular rounded-lg"
        /> */}
      </form>
      <p className="text-[#757171] mx-[315px] mt-[15px] mb-[20px]">
        Or sign up with
      </p>

      <div className="flex gap-[22px] mx-[235px]">
        <Icon src="fa-brands fa-google fa-2xl"></Icon>
        <Icon src="fa-brands fa-apple fa-2xl"></Icon>
        <Icon src="fa-brands fa-square-facebook fa-2xl"></Icon>
      </div>
    </div>
  );
}

export default Login;
