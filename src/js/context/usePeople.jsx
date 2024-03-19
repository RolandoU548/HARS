import { useContext } from "react";
import { PeopleContext } from "./PeopleContext";

export const usePeople = () => {
  const context = useContext(PeopleContext);
  if (!context) {
    throw new Error("usePeople must be used within a PeopleContext");
  }
  return context;
};
