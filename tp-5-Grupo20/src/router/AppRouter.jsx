import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ListaAlumnos from '../pages/ListaAlumno';
import AgregarAlumno from '../pages/AgregarAlumno';
import EditarAlumno from '../pages/EditarAlumno';
import DetalleAlumno from '../pages/DetallesAlumno';
import AcercaDe from '../pages/AcercaDe';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/alumnos" element={<ListaAlumnos />} />
    <Route path="/alumnos/nuevo" element={<AgregarAlumno />} />
    <Route path="/alumnos/:id" element={<DetalleAlumno />} />
    <Route path="/alumnos/:id/editar" element={<EditarAlumno />} />
    <Route path="/acerca" element={<AcercaDe />} />
  </Routes>
);

export default AppRouter;
