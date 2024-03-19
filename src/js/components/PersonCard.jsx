import PropTypes from "prop-types";

export const PersonCard = ({ person }) => {
  return (
    <div className="flex gap-5" key={person.id}>
      <div>{person.first_name}</div>
      <div>{person.last_name}</div>
      <div>{person.birthday}</div>
    </div>
  );
};

PersonCard.propTypes = {
  person: PropTypes.object,
};
