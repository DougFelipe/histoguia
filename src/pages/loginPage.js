import Register from "../components/register";
import Login from "../components/login";

function LoginPage() {
  return (
    <div className="w-full h-screen bg-[#130338] flex justify-center items-center max-md:w-[393px] max-md:h-[852px]">
      <Register hidden="max-md:hidden"></Register>
      <Login></Login>
    </div>
  );
}

export default LoginPage;
