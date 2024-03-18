import { useState } from "react";
import { useNavigate } from "react-router";
import "../../css/app.css";

export const App = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button
          onClick={() => {
            navigate("/logIn");
          }}
        >
          LogIn
        </button>
        <button
          onClick={() => {
            navigate("/signUp");
          }}
        >
          SignUp
        </button>
      </div>
    </>
  );
};
