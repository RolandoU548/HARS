import { createContext, useState } from "react";
import { supabase } from "../../supabase/supabase.js";
import PropTypes from "prop-types";

export const PeopleContext = createContext();

export const PeopleContextProvider = ({ children }) => {
  const [people, setPeople] = useState();
  const [user, setUser] = useState();

  const getUser = async () => {
    const user = await supabase.auth.getUser();
    setUser(user.data.user);
  };

  const getPeople = async () => {
    try {
      const { data, error } = await supabase.from("person").select();
      setPeople(data);
      if (error) console.error(error);
    } catch (error) {
      console.error(error);
    }
  };

  const createPerson = async (person) => {
    try {
      const { error } = await supabase.from("person").insert(person);
      if (error) console.error(error);
      getPeople();
    } catch (error) {
      console.error(error);
    }
  };

  const updatePerson = async (person) => {
    try {
      const { data, error } = await supabase
        .from("person")
        .update(person)
        .eq("id", person.id)
        .select();
      if (error) console.error(error);
      setPeople(people.map((p) => (p.id === person.id ? data[0] : p)));
    } catch (error) {
      console.error(error);
    }
  };

  const deletePerson = async (id) => {
    try {
      const { error } = await supabase.from("person").delete().eq("id", id);
      if (error) console.error(error);
      setPeople(people.filter((person) => person.id != id));
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = () => {
    supabase.auth.signOut();
    setPeople([]);
  };

  return (
    <PeopleContext.Provider
      value={{
        getUser,
        user,
        people,
        getPeople,
        createPerson,
        updatePerson,
        deletePerson,
        logOut,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

PeopleContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};
