import "../../css/logIn.css";
import { supabase } from "../../supabase/supabase.js";
import { useState } from "react";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const signUp = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) console.error(error);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSubmitting) {
      setIsSubmitting(true);
      try {
        await signUp(email, password);
      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <h1>LogIn</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">ENVIAR</button>
      </form>
      <button
        onClick={async () => {
          const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "google",
          });
          console.log(data);
          console.log(error);
        }}
      >
        GOOGLE
      </button>
    </>
  );
};