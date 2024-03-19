import { Route, Routes, useNavigate } from "react-router-dom";
import { PeopleContextProvider } from "./context/PeopleContext.jsx";
import { ProtectedRouter } from "./components/ProtectedRouter.jsx";

import { App } from "./views/app.jsx";
import { SignUp } from "./views/signUp.jsx";
import { LogIn } from "./views/logIn.jsx";
import { Private } from "./views/private.jsx";
import { Person } from "./views/person.jsx";
import { NotFound } from "./views/notFound.jsx";
import { useEffect } from "react";
import { supabase } from "../supabase/supabase.js";

const Layout = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   supabase.auth.onAuthStateChange((event, session) => {
  //     if (session) navigate("/private");
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <PeopleContextProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route element={<ProtectedRouter />}>
          <Route path="/private" element={<Private />} />
          <Route path="/person" element={<Person />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PeopleContextProvider>
  );
};

export default Layout;
