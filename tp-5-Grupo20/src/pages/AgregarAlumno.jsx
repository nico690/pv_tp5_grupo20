import React from "react";
import AlumnoForm from "../components/AlumnoForm";

function AgregarAlumno({ agregarAlumno }) {
  return (
    <div>
      <AlumnoForm onSubmitForm={agregarAlumno} />
    </div>
  );
}

export default AgregarAlumno;
