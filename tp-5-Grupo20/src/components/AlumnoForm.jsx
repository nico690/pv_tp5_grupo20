import React, { useState, useEffect } from "react";

const initialFormState = {
  Lu: "",
  nombre: "",
  apellido: "",
  curso: "",
  email: "",
  domicilio: "",
  telefono: "",
};

function AlumnoForm({ onSubmitForm, alumnoInicial = null }) {
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (alumnoInicial) {
      setFormData(alumnoInicial);
    } else {
      setFormData(initialFormState);
    }
  }, [alumnoInicial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.apellido || !formData.email) {
      alert("Nombre, Apellido y Email son campos obligatorios.");
      return;
    }
    onSubmitForm(formData);
    if (!alumnoInicial) {
      setFormData(initialFormState);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>{alumnoInicial ? "Editar Alumno" : "Agregar Nuevo Alumno"}</h2>
      {alumnoInicial && formData.Lu && (
        <div className="form-group">
          <label htmlFor="Lu">LU</label>
          <input
            type="text"
            id="Lu"
            name="Lu"
            value={formData.Lu}
            readOnly
            disabled
          />
        </div>
      )}
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="apellido">Apellido</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="curso">Curso</label>
        <input
          type="text"
          id="curso"
          name="curso"
          value={formData.curso}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="domicilio">Domicilio</label>
        <input
          type="text"
          id="domicilio"
          name="domicilio"
          value={formData.domicilio}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="telefono">Teléfono</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="button button-primary">
        {alumnoInicial ? "Guardar Cambios" : "Agregar Alumno"}
      </button>
    </form>
  );
}

export default AlumnoForm;
