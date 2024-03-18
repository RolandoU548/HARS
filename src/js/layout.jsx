import { Route, Routes } from "react-router-dom";
import { ProtectedRouter } from "./components/ProtectedRouter.jsx";

import { App } from "./views/app.jsx";
import { SignUp } from "./views/signUp.jsx";
import { LogIn } from "./views/logIn.jsx";
import { Private } from "./views/private.jsx";
import { NotFound } from "./views/notFound.jsx";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route element={<ProtectedRouter />}>
        <Route path="/private" element={<Private />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Layout;
