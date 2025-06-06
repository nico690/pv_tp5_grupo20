import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRouter from "./router/AppRouter";

const generateUniqueLu = () =>
  `APU${Math.random().toString(36).substr(2, 7).toUpperCase()}`;

function App() {
  const [alumnos, setAlumnos] = useState(() => {
    const savedAlumnos = localStorage.getItem("alumnos");
    return savedAlumnos ? JSON.parse(savedAlumnos) : [];
  });

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.className = `${savedTheme}-mode`;
    return savedTheme;
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
  }, [alumnos]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = `${theme}-mode`;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleAgregarAlumno = (alumno) => {
    const nuevoAlumno = { ...alumno, Lu: generateUniqueLu() };
    setAlumnos((prevAlumnos) => [...prevAlumnos, nuevoAlumno]);
    navigate("/alumnos");
  };

  const handleEditarAlumno = (alumnoActualizado) => {
    setAlumnos((prevAlumnos) =>
      prevAlumnos.map((a) =>
        a.Lu === alumnoActualizado.Lu ? alumnoActualizado : a
      )
    );
    navigate(`/alumnos/${alumnoActualizado.Lu}`);
  };

  const handleEliminarAlumno = (lu) => {
    if (window.confirm("¿Está seguro de que desea eliminar este alumno?")) {
      setAlumnos((prevAlumnos) => prevAlumnos.filter((a) => a.Lu !== lu));
    }
  };

  return (
    <>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <div className="container">
        <AppRouter
          alumnos={alumnos}
          agregarAlumno={handleAgregarAlumno}
          editarAlumno={handleEditarAlumno}
          eliminarAlumno={handleEliminarAlumno}
        />
      </div>
    </>
  );
}

export default App;
