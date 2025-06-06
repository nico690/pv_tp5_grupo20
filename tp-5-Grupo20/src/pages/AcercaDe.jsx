import React from "react";

function AcercaDe() {
  return (
    <div className="alumno-card">
      <h2>Acerca de esta Aplicación</h2>
      <p>
        Aplicación desarrollada como parte del Trabajo Práctico N° 5 de
        Programación Visual.
      </p>
      <p>
        <strong>Institución:</strong> Universidad Nacional de Jujuy - Facultad
        de Ingeniería
      </p>
      <p>
        <strong>Carrera:</strong> Analista Programador Universitario
      </p>

      <h3 className="mt-20">Información de los Creadores:</h3>
      <ul>
        <li>
          <strong>Nombre:</strong> Iriarte Gloss, Valentin Mateo.
        </li>
        <li>
          <strong>Usuario GitHub:</strong> valentiniriar
        </li>
        <li>
          <strong>Nombre:</strong> Churquina, Facundo.
        </li>
        <li>
          <strong>Usuario GitHub:</strong> Facudebug123
        </li>
         <li>
          <strong>Nombre:</strong> Chavez, Rodrigo Nicolas.
        </li>
        <li>
          <strong>Usuario GitHub:</strong> nico690
        </li>
         <li>
          <strong>Nombre:</strong> Gutierrez Nanda, Mauro Nahuel.
        </li>
        <li>
          <strong>Usuario GitHub:</strong> MauroNanda
        </li>
      </ul>
      <p className="mt-20">
        <strong>Objetivo:</strong> Implementar una SPA para la gestión de
        alumnos utilizando React, Vite, React Router Dom, con manejo de eventos,
        componentes funcionales y navegación.
      </p>
      <p>
        <strong>Versión:</strong> 1.0.0
      </p>
    </div>
  );
}

export default AcercaDe;
