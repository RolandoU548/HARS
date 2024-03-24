import "../../css/logIn.css";
import { supabase } from "../../supabase/supabase.js";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { usePeople } from "../context/usePeople.jsx";

export const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { getPeople, getUser } = usePeople();

  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (data?.session) {
        getUser();
        getPeople();
        navigate("/private");
      }
      if (error) {
        alert(error);
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
    if (error) console.error(error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    if (!isSubmitting) {
      setIsSubmitting(true);
      try {
        await signIn(email, password);
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
          name="email"
          type="email"
          autoComplete="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">ENVIAR</button>
      </form>
      <button onClick={signInWithGoogle}>GOOGLE</button>
      <Link to="/">Volver</Link>
    </>
  );
};
