import { useState } from "react";
import { supabase } from "../../supabase/supabase";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { usePeople } from "../context/usePeople";

export const Person = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [person, setPerson] = useState();
  const { createPerson } = usePeople();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10">
        <label htmlFor="first_name">Nombre</label>
        <input
          className="border border-black"
          type="text"
          id="first_name"
          name="first_name"
          autoComplete="first_name"
          onChange={(e) => {
            setPerson({ ...person, first_name: e.target.value });
          }}
        />
        <label htmlFor="last_name">Apellido</label>
        <input
          className="border border-black"
          type="text"
          id="last_name"
          name="last_name"
          autoComplete="family_name"
          onChange={(e) => {
            setPerson({ ...person, last_name: e.target.value });
          }}
        />
        <label htmlFor="birthdate">Fecha de Nacimiento</label>
        <input
          className="border border-black"
          type="date"
          id="birthdate"
          name="birthdate"
          onChange={(e) => {
            setPerson({ ...person, birthdate: e.target.value });
          }}
        />
        <label htmlFor="age">Edad</label>
        <input
          className="border border-black"
          type="number"
          min={0}
          max={120}
          id="age"
          name="age"
          onChange={(e) => {
            setPerson({ ...person, age: e.target.value });
          }}
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
