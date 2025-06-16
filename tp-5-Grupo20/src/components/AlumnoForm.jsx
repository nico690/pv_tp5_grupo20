import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  Container,
  Grid,
  Tooltip
} from '@mui/material';
import { useNotification } from '../context/NotificationContext';
import LoadingSpinner from './LoadingSpinner';

const initialFormState = {
  Lu: "",
  nombre: "",
  apellido: "",
  curso: "",
  email: "",
  domicilio: "",
  telefono: "",
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

function AlumnoForm({ onSubmitForm, alumnoInicial = null, loading = false }) {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const { showNotification } = useNotification();

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
    
    // Validar email en tiempo real
    if (name === 'email') {
      setErrors(prev => ({
        ...prev,
        email: value && !validateEmail(value) ? 'Email inválido' : ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre) newErrors.nombre = 'El nombre es requerido';
    if (!formData.apellido) newErrors.apellido = 'El apellido es requerido';
    if (!formData.email) {
      newErrors.email = 'El email es requerido';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      showNotification('Por favor, corrija los errores en el formulario', 'error');
      return;
    }
    onSubmitForm(formData);
  };

  if (loading) {
    return <LoadingSpinner message="Procesando..." />;
  }

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
              <Tooltip title="Ingrese el nombre del alumno">
                <TextField
                  required
                  fullWidth
                  label="Nombre"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  variant="outlined"
                  error={!!errors.nombre}
                  helperText={errors.nombre}
                />
              </Tooltip>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Tooltip title="Ingrese el apellido del alumno">
                <TextField
                  required
                  fullWidth
                  label="Apellido"
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  variant="outlined"
                  error={!!errors.apellido}
                  helperText={errors.apellido}
                />
              </Tooltip>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Tooltip title="Ingrese el curso del alumno">
                <TextField
                  fullWidth
                  label="Curso"
                  id="curso"
                  name="curso"
                  value={formData.curso}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Tooltip>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Tooltip title="Ingrese un email válido">
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
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Tooltip>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Tooltip title="Ingrese el domicilio del alumno">
                <TextField
                  fullWidth
                  label="Domicilio"
                  id="domicilio"
                  name="domicilio"
                  value={formData.domicilio}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Tooltip>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Tooltip title="Ingrese el teléfono del alumno">
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
              </Tooltip>
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
