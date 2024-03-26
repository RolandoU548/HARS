import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { usePeople } from "../context/usePeople.jsx";
import { useEffect } from "react";
import { PersonCard } from "../components/PersonCard.jsx";

export const Private = () => {
  const navigate = useNavigate();
  const { people, getPeople, logOut, user, getUser } = usePeople();

  useEffect(() => {
    if (!people) getPeople();
    if (!user) getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!people || !user) {
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
        {user.identities.find((identity) => identity.provider == "google")
          ?.identity_data.full_name || user.email}
      </div>
      <div>
        {people?.length === 0
          ? "No hay personas"
          : people.map((person) => {
              return <PersonCard person={person} key={person.id}></PersonCard>;
            })}
      </div>
    </>
  );
};
