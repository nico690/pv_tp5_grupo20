import React from "react";

const AgregarAlumno = () => {
  return (
    <div>
      <h2>Agregar Alumno</h2>
      <form>
        <label>
          Nombre:
          <input type="text" name="nombre" />
        </label>
        <br />
        <label>
          Apellido:
          <input type="text" name="apellido" />
        </label>
        <br />
        
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default AgregarAlumno;
