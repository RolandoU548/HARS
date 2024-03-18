import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "../../supabase/supabase.js";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const ProtectedRouter = ({ children, redirectTo = "/logIn" }) => {
  const [logged, setLogged] = useState(true);
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        setLogged(false);
      }
    });
  }, []);
  if (logged) return children || <Outlet />;
  return <Navigate to={redirectTo} />;
};

ProtectedRouter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  redirectTo: PropTypes.string,
};
