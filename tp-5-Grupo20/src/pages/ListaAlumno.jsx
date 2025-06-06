// src/pages/ListaAlumno.jsx
import React from "react";
import { Link } from "react-router-dom";

function ListaAlumno({ alumnos, eliminarAlumno }) {
  if (!alumnos || alumnos.length === 0) {
    return (
      <div>
        <h2>Lista de Alumnos</h2>
        <p>No hay alumnos registrados actualmente.</p>
        <Link to="/alumnos/nuevo" className="button button-primary">
          Agregar Nuevo Alumno
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <Link to="/alumnos/nuevo" className="button button-primary mb-20">
        Agregar Nuevo Alumno
      </Link>
      <table className="alumnos-table">
        <thead>
          <tr>
            <th>LU</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Curso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.Lu}>
              <td>{alumno.Lu}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.apellido}</td>
              <td>{alumno.curso}</td>
              <td className="action-buttons">
                <Link
                  to={`/alumnos/${alumno.Lu}`}
                  className="button button-secondary"
                >
                  Ver Detalles
                </Link>
                <Link
                  to={`/alumnos/${alumno.Lu}/editar`}
                  className="button button-primary"
                >
                  Editar
                </Link>
                <button
                  onClick={() => eliminarAlumno(alumno.Lu)}
                  className="button button-danger"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaAlumno;
