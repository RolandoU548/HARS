import "../../css/private.css";
import { supabase } from "../../supabase/supabase";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { usePeople } from "../context/usePeople.jsx";
import { useEffect } from "react";
import { PersonCard } from "../components/PersonCard.jsx";

export const Private = () => {
  const navigate = useNavigate();
  const { people, getPeople } = usePeople();

  useEffect(() => {
    getPeople();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!people) {
    return <h1>Cargando</h1>;
  }

  return (
    <>
      <h1>Private</h1>
      <button
        onClick={() => {
          supabase.auth.signOut();
          navigate("/");
        }}
      >
        Cerrar Sesión
      </button>
      <Link to="/person">Person</Link>
      <div>
        {people.map((person) => {
          return <PersonCard person={person} key={person.id}></PersonCard>;
        })}
      </div>
    </>
  );
};
