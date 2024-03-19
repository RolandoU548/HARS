import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/app.css";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
        <Link to="/logIn">LogIn</Link>
        <Link to="/signUp">SignUp</Link>
      </div>
    </>
  );
};
