import logo from "./logo.svg";
import "./App.css";
import Register from "./components/register";
import Login from "./components/login";
import QuizQuestion from "./components/QuizQuestion";

function App() {
  return (
    <div className="w-full h-screen bg-[#130338] flex justify-center items-center">
      <Register></Register>
      <Login></Login>
      /* Inserir o "<QuizQuestion /> aonde for necessário" */
    </div>
  );
}

export default App;
