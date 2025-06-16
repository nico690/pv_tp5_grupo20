import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import NavBar from "./components/NavBar";
import AppRouter from "./router/AppRouter";

const generateUniqueLu = () =>
  `APU${Math.random().toString(36).substr(2, 7).toUpperCase()}`;

function App() {
  const [alumnos, setAlumnos] = useState(() => {
    const savedAlumnos = localStorage.getItem("alumnos");
    return savedAlumnos ? JSON.parse(savedAlumnos) : [];
  });

  const [mode, setMode] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: '#1976d2',
            },
            secondary: {
              main: '#dc004e',
            },
          }
        : {
            primary: {
              main: '#90caf9',
            },
            secondary: {
              main: '#f48fb1',
            },
          }),
    },
  });

  useEffect(() => {
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
  }, [alumnos]);

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar theme={mode} toggleTheme={toggleTheme} />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <AppRouter
          alumnos={alumnos}
          agregarAlumno={handleAgregarAlumno}
          editarAlumno={handleEditarAlumno}
          eliminarAlumno={handleEliminarAlumno}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
