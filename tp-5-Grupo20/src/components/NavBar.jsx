import React from "react";
import { Link } from "react-router-dom";

function NavBar({ theme, toggleTheme }) {
  return (
    <nav className="navbar container">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/alumnos">Lista de Alumnos</Link>
        </li>
        <li>
          <Link to="/alumnos/nuevo">Nuevo Alumno</Link>
        </li>
        <li>
          <Link to="/acerca-de">Acerca de</Link>
        </li>
      </ul>
      <button onClick={toggleTheme} className="theme-toggle-button">
        Modo {theme === "light" ? "Oscuro" : "Claro"}
      </button>
    </nav>
  );
}

export default NavBar;
