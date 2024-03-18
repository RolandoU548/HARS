import "../../css/private.css";
import { supabase } from "../../supabase/supabase";

export const Private = () => {
  return (
    <>
      <h1>Private</h1>
      <button
        onClick={() => {
          supabase.auth.signOut();
        }}
      >
        Cerrar Sesión
      </button>
    </>
  );
};
