import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
  IconButton,
  Box
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

function AlumnoCard({ alumno, onDelete }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {alumno.nombre} {alumno.apellido}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          LU: {alumno.Lu}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Curso: {alumno.curso}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Email: {alumno.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={1} justifyContent="center">
          <Grid item>
            <IconButton
              component={Link}
              to={`/alumnos/${alumno.Lu}`}
              color="primary"
              aria-label="ver detalles"
            >
              <VisibilityIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              component={Link}
              to={`/alumnos/${alumno.Lu}/editar`}
              color="primary"
              aria-label="editar"
            >
              <EditIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => onDelete(alumno.Lu)}
              color="error"
              aria-label="eliminar"
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default AlumnoCard;
