import "../../css/signUp.css";
import { supabase } from "../../supabase/supabase.js";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const signUp = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: import.meta.env.VITE_DOMAIN,
        },
      });
      if (data?.user) alert("Verifica el correo electronico");
      if (error) {
        alert(error);
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
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
      <h1>SignUp</h1>
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
          autoComplete="new-password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">ENVIAR</button>
      </form>
      <Link to="/">Volver</Link>
    </>
  );
};
