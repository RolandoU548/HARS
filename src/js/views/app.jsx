import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../../css/app.css";
import { supabase } from "../../supabase/supabase";

export const App = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) navigate("/private");
    });
  }, [navigate]);

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
