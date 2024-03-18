import { Route, Routes, useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabase.js";
import { ProtectedRouter } from "./components/ProtectedRouter.jsx";

import { App } from "./views/app.jsx";
import { SignUp } from "./views/signUp.jsx";
import { LogIn } from "./views/logIn.jsx";
import { Private } from "./views/private.jsx";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      //   if (!session) {
      //     navigate("/login");
      //   } else {
      //     navigate("/");
      //   }
    });
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route element={<ProtectedRouter />}>
        <Route path="/private" element={<Private />} />
      </Route>
    </Routes>
  );
};

export default Layout;
