import React from "react";

function AcercaDePage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Acerca de la Aplicación</h1>
      <p>
        Esta aplicación fue desarrollada como parte del Trabajo Práctico 5 de la
        materia Programación Visual. Permite gestionar alumnos: agregar,
        editar, eliminar y visualizar detalles.
      </p>
      <h2>Integrantes del Grupo 20</h2>
      <ul>
        <li>Estudiante 1 - LU: APU00999</li>
        <li>Estudiante 2 - LU: APU00XXX</li>
        <li>Estudiante 3 - LU: APU00YYY</li>
        {/* Agregá los nombres reales de tu grupo acá */}
      </ul>
    </div>
  );
}

export default AcercaDePage;
