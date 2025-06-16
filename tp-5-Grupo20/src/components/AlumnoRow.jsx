import React from 'react';
import { Link } from 'react-router-dom';
import {
  TableRow,
  TableCell,
  IconButton,
  Tooltip
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

function AlumnoRow({ alumno, onDelete }) {
  return (
    <TableRow hover>
      <TableCell>{alumno.Lu}</TableCell>
      <TableCell>{alumno.nombre}</TableCell>
      <TableCell>{alumno.apellido}</TableCell>
      <TableCell>{alumno.curso}</TableCell>
      <TableCell>{alumno.email}</TableCell>
      <TableCell align="right">
        <Tooltip title="Ver detalles">
          <IconButton
            component={Link}
            to={`/alumnos/${alumno.Lu}`}
            color="primary"
            size="small"
          >
            <VisibilityIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Editar">
          <IconButton
            component={Link}
            to={`/alumnos/${alumno.Lu}/editar`}
            color="primary"
            size="small"
          >
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Eliminar">
          <IconButton
            onClick={() => onDelete(alumno.Lu)}
            color="error"
            size="small"
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
}

export default AlumnoRow;
