import "../../css/private.css";
import { supabase } from "../../supabase/supabase";
import { useNavigate } from "react-router";

export const Private = () => {
  const navigate = useNavigate();
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
    </>
  );
};
