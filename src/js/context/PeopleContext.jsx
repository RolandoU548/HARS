import { createContext, useState } from "react";
import { supabase } from "../../supabase/supabase.js";
import PropTypes from "prop-types";

export const PeopleContext = createContext();

export const PeopleContextProvider = ({ children }) => {
  const [people, setPeople] = useState();

  const getPeople = async () => {
    try {
      let user = await supabase.auth.getUser();
      user = user.data.user;
      const result = await supabase
        .from("person")
        .select()
        .eq("userId", user.id);
      setPeople(result.data);
      if (result?.error) console.error(result.error);
    } catch (error) {
      console.error(error);
    }
  };

  const createPerson = async (person) => {
    try {
      const result = await supabase.from("person").insert(person);
      if (result?.error) console.error(result.error);
      getPeople();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PeopleContext.Provider value={{ people, getPeople, createPerson }}>
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
