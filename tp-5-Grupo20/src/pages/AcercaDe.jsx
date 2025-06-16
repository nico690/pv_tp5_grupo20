import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  Avatar,
  Link,
  Stack
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import GroupIcon from '@mui/icons-material/Group';
import GitHubIcon from '@mui/icons-material/GitHub';

const integrantes = [
  {
    nombre: "Chavez, Rodrigo Nicolas",
    github: "https://github.com/nico690",
    avatar: "https://github.com/nico690.png"
  },
  {
    nombre: "Gutierrez Nanda, Mauro Nahuel",
    github: "https://github.com/MauroNanda",
    avatar: "https://github.com/MauroNanda.png"
  },
  {
    nombre: "Iriarte Gloss, Valentin Mateo",
    github: "https://github.com/valentiniriar",
    avatar: "https://github.com/valentiniriar.png"
  },
  {
    nombre: "Churquina, Facundo",
    github: "https://github.com/facudebug123",
    avatar: "https://github.com/facudebug123.png"
  }
];

function AcercaDe() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 6 }}>
        {/* Encabezado */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Acerca del Proyecto
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Sistema de Gestión de Alumnos - Grupo 20
          </Typography>
        </Box>

        {/* Sección de Información */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, height: '100%', bgcolor: 'background.default' }}>
              <Stack spacing={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <SchoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                  <Typography variant="h5">Objetivo</Typography>
                </Box>
                <Typography variant="body1">
                  Desarrollar una aplicación web moderna y funcional para la gestión eficiente de datos de estudiantes.
                </Typography>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, height: '100%', bgcolor: 'background.default' }}>
              <Stack spacing={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                  <Typography variant="h5">Tecnologías</Typography>
                </Box>
                <Typography variant="body1">
                  React, Material UI, Context API, React Router, y más tecnologías modernas de desarrollo web.
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>

        {/* Sección de Integrantes */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Nuestro Equipo
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
            Conoce a los desarrolladores detrás del proyecto
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {integrantes.map((integrante, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                elevation={0}
                sx={{ 
                  height: '100%',
                  bgcolor: 'background.default',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 3
                  }
                }}
              >
                <CardContent>
                  <Stack spacing={2} alignItems="center">
                    <Avatar
                      src={integrante.avatar}
                      alt={integrante.nombre}
                      sx={{ 
                        width: 140,
                        height: 140,
                        border: '4px solid',
                        borderColor: 'primary.main'
                      }}
                    />
                    <Typography variant="h6" align="center" sx={{ fontWeight: 'medium' }}>
                      {integrante.nombre}
                    </Typography>
                    <Link
                      href={integrante.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        color: 'primary.main',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      <GitHubIcon />
                      Ver en GitHub
                    </Link>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default AcercaDe;
