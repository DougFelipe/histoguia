
import Register from "../components/register";
import Login from "../components/login";

function LoginPage() {
  return (
    <div className="w-full h-screen bg-[#130338] flex justify-center items-center">
        <Register></Register>
        <Login></Login>    
     </div>
  );
}

export default LoginPage;