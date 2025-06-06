import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";

function DetalleAlumno({ alumnos }) {
  const { lu } = useParams();
  const alumno = alumnos.find((a) => a.Lu === lu);

  if (!alumno) {
    return <Navigate to="/alumnos" replace />;
  }

  return (
    <div className="alumno-card">
      <h2>Detalle del Alumno</h2>
      <p>
        <strong>LU:</strong> {alumno.Lu}
      </p>
      <p>
        <strong>Nombre:</strong> {alumno.nombre}
      </p>
      <p>
        <strong>Apellido:</strong> {alumno.apellido}
      </p>
      <p>
        <strong>Curso:</strong> {alumno.curso}
      </p>
      <p>
        <strong>Email:</strong> {alumno.email}
      </p>
      <p>
        <strong>Domicilio:</strong> {alumno.domicilio}
      </p>
      <p>
        <strong>Teléfono:</strong> {alumno.telefono}
      </p>
      <div className="mt-20 action-buttons">
        <Link
          to={`/alumnos/${alumno.Lu}/editar`}
          className="button button-primary"
        >
          Editar Alumno
        </Link>
        <Link to="/alumnos" className="button button-secondary">
          Volver a la Lista
        </Link>
      </div>
    </div>
  );
}

export default DetalleAlumno;
