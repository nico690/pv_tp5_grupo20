import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  Container,
  Grid
} from '@mui/material';

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
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          {alumnoInicial ? "Editar Alumno" : "Agregar Nuevo Alumno"}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            {alumnoInicial && formData.Lu && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="LU"
                  id="Lu"
                  name="Lu"
                  value={formData.Lu}
                  disabled
                  variant="outlined"
                />
              </Grid>
            )}
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Nombre"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Apellido"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Curso"
                id="curso"
                name="curso"
                value={formData.curso}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Email"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Domicilio"
                id="domicilio"
                name="domicilio"
                value={formData.domicilio}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Teléfono"
                id="telefono"
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  {alumnoInicial ? "Guardar Cambios" : "Agregar Alumno"}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export default AlumnoForm;
