import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ListaAlumno from "../pages/ListaAlumno";
import AgregarAlumno from "../pages/AgregarAlumno";
import EditarAlumno from "../pages/EditarAlumno";
import DetalleAlumno from "../pages/DetalleAlumno";
import AcercaDe from "../pages/AcercaDe";

function AppRouter({ alumnos, agregarAlumno, editarAlumno, eliminarAlumno }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/alumnos"
        element={
          <ListaAlumno alumnos={alumnos} eliminarAlumno={eliminarAlumno} />
        }
      />
      <Route
        path="/alumnos/nuevo"
        element={<AgregarAlumno agregarAlumno={agregarAlumno} />}
      />
      <Route
        path="/alumnos/:lu/editar"
        element={<EditarAlumno alumnos={alumnos} editarAlumno={editarAlumno} />}
      />
      <Route
        path="/alumnos/:lu"
        element={<DetalleAlumno alumnos={alumnos} />}
      />
      <Route path="/acerca-de" element={<AcercaDe />} />
    </Routes>
  );
}

export default AppRouter;
