import "../../css/private.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { usePeople } from "../context/usePeople.jsx";
import { useEffect } from "react";
import { PersonCard } from "../components/PersonCard.jsx";

export const Private = () => {
  const navigate = useNavigate();
  const { people, getPeople, logOut } = usePeople();

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
          logOut();
          navigate("/");
        }}
      >
        Cerrar Sesión
      </button>
      <Link to="/person">Person</Link>
      <div>
        {people.length === 0
          ? "No hay personas"
          : people.map((person) => {
              return <PersonCard person={person} key={person.id}></PersonCard>;
            })}
      </div>
    </>
  );
};
