import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box } from '@mui/material';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";
import { NotificationProvider } from "./context/NotificationContext";

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

  const [loading, setLoading] = useState(true);

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
    // Simular carga inicial
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
    setLoading(true);
    const nuevoAlumno = { ...alumno, Lu: generateUniqueLu() };
    setAlumnos((prevAlumnos) => [...prevAlumnos, nuevoAlumno]);
    setTimeout(() => {
      setLoading(false);
      navigate("/alumnos");
    }, 500);
  };

  const handleEditarAlumno = (alumnoActualizado) => {
    setLoading(true);
    setAlumnos((prevAlumnos) =>
      prevAlumnos.map((a) =>
        a.Lu === alumnoActualizado.Lu ? alumnoActualizado : a
      )
    );
    setTimeout(() => {
      setLoading(false);
      navigate(`/alumnos/${alumnoActualizado.Lu}`);
    }, 500);
  };

  const handleEliminarAlumno = (lu) => {
    setLoading(true);
    setAlumnos((prevAlumnos) => prevAlumnos.filter((a) => a.Lu !== lu));
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NotificationProvider>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <NavBar theme={mode} toggleTheme={toggleTheme} />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flex: 1 }}>
            <AppRouter
              alumnos={alumnos}
              agregarAlumno={handleAgregarAlumno}
              editarAlumno={handleEditarAlumno}
              eliminarAlumno={handleEliminarAlumno}
              loading={loading}
            />
          </Container>
          <Footer />
        </Box>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
