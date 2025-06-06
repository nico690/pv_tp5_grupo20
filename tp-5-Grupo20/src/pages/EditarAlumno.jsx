import React from "react";
import { useParams, Navigate } from "react-router-dom";
import AlumnoForm from "../components/AlumnoForm";

function EditarAlumno({ alumnos, editarAlumno }) {
  const { lu } = useParams();
  const alumnoAEditar = alumnos.find((a) => a.Lu === lu);

  if (!alumnoAEditar) {
    return <Navigate to="/alumnos" replace />;
  }

  return (
    <div>
      <AlumnoForm onSubmitForm={editarAlumno} alumnoInicial={alumnoAEditar} />
    </div>
  );
}

export default EditarAlumno;
