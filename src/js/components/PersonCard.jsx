import PropTypes from "prop-types";
import { usePeople } from "../context/usePeople";

export const PersonCard = ({ person }) => {
  const { updatePerson, deletePerson } = usePeople();

  const handleEdit = () => {
    updatePerson({ first_name: "si", id: person.id });
  };

  const handleDelete = () => {
    deletePerson(person.id);
  };

  return (
    <div className="flex gap-5" key={person.id}>
      <div>{new Date(person.created_at).toLocaleDateString()}</div>
      <div>{person.first_name}</div>
      <div>{person.last_name}</div>
      <div>{person.birthday}</div>
      <div>{person.age}</div>
      <div>
        <button onClick={handleEdit}>EDITAR</button>
      </div>
      <div>
        <button onClick={handleDelete}>ELIMINAR</button>
      </div>
    </div>
  );
};

PersonCard.propTypes = {
  person: PropTypes.object,
};
