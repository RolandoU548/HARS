import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const App = () => {
  const [navbarOpened, setNavbarOpened] = useState(false);
  return (
    <>
      <Overlay navbarOpened={navbarOpened} setNavbarOpened={setNavbarOpened} />
      <header className="flex justify-center bg-green-50">
        <nav className="flex p-4 w-full max-w-[1440px] justify-between items-center">
          <h1 className="text-4xl font-bold">HARS</h1>
          <button
            className="resp:block hidden"
            onClick={() => {
              setNavbarOpened(!navbarOpened);
            }}
          >
            <div className="flex justify-center items-center rounded-full w-10 h-10 bg-green-400 hover:bg-green-500">
              <i className="fa-solid fa-bars text-2xl"></i>
            </div>
          </button>
          <Navigation navbarOpened={navbarOpened} />
        </nav>
      </header>
      <main className="max-w-[1440px]"></main>
    </>
  );
};

const Overlay = ({ navbarOpened, setNavbarOpened }) => {
  return (
    <div
      onClick={() => {
        setNavbarOpened(false);
      }}
      className={`${
        navbarOpened ? "resp:block" : ""
      } hidden fixed h-screen w-full bg-opacity-40 bg-gray-700`}
    ></div>
  );
};

Overlay.propTypes = {
  navbarOpened: PropTypes.bool,
  setNavbarOpened: PropTypes.func,
};

const Navigation = ({ navbarOpened }) => {
  return (
    <div
      className={`navbar flex gap-3 transition duration-500 resp:w-[15rem] resp:h-[100%] resp:bg-green-600 resp:fixed resp:top-0 resp:right-0 resp:flex-col resp:p-5 resp:max-w-[50%] ${
        navbarOpened ? "" : "resp:translate-x-full"
      }`}
    >
      <h1 className="text-4xl font-bold hidden resp:block text-center">HARS</h1>
      <Link
        to="/logIn"
        className="border-2 border-green-150 py-2 px-4 font-medium rounded-xl resp:bg-transparent bg-green-100 hover:bg-green-200 transition duration-300 text-center text-sm tiny:text-base"
      >
        Iniciar Sesión
      </Link>
      <Link
        to="/signUp"
        className="border-2 border-green-150 py-2 px-4 font-medium rounded-xl resp:bg-transparent bg-green-100 hover:bg-green-200 transition duration-300 text-center text-sm tiny:text-base"
      >
        Registrarse
      </Link>
    </div>
  );
};

Navigation.propTypes = {
  navbarOpened: PropTypes.bool,
};
