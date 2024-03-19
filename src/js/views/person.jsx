import { useState } from "react";
import "../../css/private.css";
import { supabase } from "../../supabase/supabase";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { usePeople } from "../context/usePeople";

export const Person = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [person, setPerson] = useState({ first_name: "", last_name: "" });
  const { createPerson } = usePeople();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPerson({ first_name: "", last_name: "" });
    if (!isSubmitting) {
      setIsSubmitting(true);
      try {
        await createPerson(person);
      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <h1>PERSON</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          autoComplete="first_name"
          onChange={(e) => {
            setPerson({ ...person, first_name: e.target.value });
          }}
          value={person.first_name}
        />
        <input
          type="text"
          name="last_name"
          autoComplete="family_name"
          onChange={(e) => {
            setPerson({ ...person, last_name: e.target.value });
          }}
          value={person.last_name}
        />
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Enviando" : "Enviar"}
        </button>
      </form>
      <button
        onClick={() => {
          supabase.auth.signOut();
          navigate("/");
        }}
      >
        Cerrar Sesión
      </button>
      <Link to="/private">Private</Link>
    </>
  );
};
