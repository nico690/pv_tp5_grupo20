// src/pages/ListaAlumno.jsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  TextField,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Box,
  MenuItem,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import AlumnoRow from '../components/AlumnoRow';
import ConfirmModal from '../components/ConfirmModal';
import { useNotification } from '../context/NotificationContext';

function ListaAlumno({ alumnos, eliminarAlumno }) {
  const { showNotification } = useNotification();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCurso, setFilterCurso] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [deleteModal, setDeleteModal] = useState({
    open: false,
    alumnoId: null
  });

  // Obtener lista única de cursos
  const cursos = useMemo(() => {
    return [...new Set(alumnos.map(alumno => alumno.curso))].filter(Boolean);
  }, [alumnos]);

  // Filtrar y buscar alumnos
  const filteredAlumnos = useMemo(() => {
    return alumnos.filter(alumno => {
      const matchesSearch = 
        alumno.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumno.apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumno.Lu.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter = !filterCurso || alumno.curso === filterCurso;
      
      return matchesSearch && matchesFilter;
    });
  }, [alumnos, searchTerm, filterCurso]);

  // Paginación
  const paginatedAlumnos = useMemo(() => {
    const start = page * rowsPerPage;
    return filteredAlumnos.slice(start, start + rowsPerPage);
  }, [filteredAlumnos, page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDeleteClick = (lu) => {
    setDeleteModal({
      open: true,
      alumnoId: lu
    });
  };

  const handleDeleteConfirm = () => {
    eliminarAlumno(deleteModal.alumnoId);
    setDeleteModal({ open: false, alumnoId: null });
    showNotification('Alumno eliminado exitosamente', 'success');
  };

  const handleDeleteCancel = () => {
    setDeleteModal({ open: false, alumnoId: null });
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3} alignItems="center" sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h1" gutterBottom>
              Lista de Alumnos
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              component={Link}
              to="/alumnos/nuevo"
              variant="contained"
              startIcon={<AddIcon />}
            >
              Agregar Alumno
            </Button>
          </Grid>
        </Grid>

        <Paper sx={{ p: 2, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Buscar alumno"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="Filtrar por curso"
                value={filterCurso}
                onChange={(e) => setFilterCurso(e.target.value)}
                sx={{ minWidth: '300px' }}
              >
                <MenuItem value="">Todos los cursos</MenuItem>
                {cursos.map((curso) => (
                  <MenuItem key={curso} value={curso}>
                    {curso}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Paper>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>LU</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>Curso</TableCell>
                <TableCell>Email</TableCell>
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedAlumnos.map((alumno) => (
                <AlumnoRow
                  key={alumno.Lu}
                  alumno={alumno}
                  onDelete={handleDeleteClick}
                />
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredAlumnos.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage="Filas por página"
          />
        </TableContainer>

        <ConfirmModal
          open={deleteModal.open}
          onClose={handleDeleteCancel}
          onConfirm={handleDeleteConfirm}
          title="Eliminar Alumno"
          message="¿Está seguro de que desea eliminar este alumno? Esta acción no se puede deshacer."
        />
      </Box>
    </Container>
  );
}

export default ListaAlumno;
