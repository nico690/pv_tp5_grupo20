import React from "react";
import { Link } from "react-router-dom";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  Box,
  useTheme
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function NavBar({ theme, toggleTheme }) {
  const muiTheme = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sistema de Alumnos
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/"
          >
            Inicio
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/alumnos"
          >
            Lista de Alumnos
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/alumnos/nuevo"
          >
            Nuevo Alumno
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/acerca-de"
          >
            Acerca de
          </Button>
          <IconButton 
            color="inherit" 
            onClick={toggleTheme}
            sx={{ ml: 1 }}
          >
            {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
