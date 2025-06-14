import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
  Chip,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const projects = [
    {
      title: 'Medical chatbot',
      year: '2024',
      description: 'Developed an AI-powered medical chatbot in Jupyter Notebook using Python libraries like NLTK and TensorFlow. The chatbot recommends treatment models based on healthcare data to answer symptom-related queries and suggest actions for patients. Implemented a machine learning classifier for interactive usage.',
      technologies: ['Python', 'NLTK', 'TensorFlow', 'Jupyter Notebook', 'Machine Learning'],
    },
    {
      title: 'Stock Price Prediction using Machine Learning',
      year: '2024',
      description: 'Developed a regression model using algorithms like Linear Regression and LSTM to forecast stock prices based on historical data. Integrated feature engineering techniques and technical indicators for improved accuracy. Evaluated model performance using RMSE and visualized trends through interactive plots.',
      technologies: ['Python', 'Machine Learning', 'LSTM', 'Linear Regression', 'Feature Engineering'],
    },
    {
      title: 'Personal Portfolio Website (React, typescript, mui)',
      year: 'June 2025',
      description: 'Designed and developed a dynamic personal portfolio using React, MUI, and Typescript to enhance development efficiency and code quality. The portfolio showcases projects, skills, and experiences with a focus on interactive design, smooth animations, and responsive UI.',
      technologies: ['React', 'TypeScript', 'MUI'],
    },
  ];

  const getBackgroundStyle = () => {
    if (theme.palette.mode === 'dark') {
      return {
        background: `
          linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(25, 118, 210, 0.1) 100%),
          linear-gradient(45deg, #1a1a1a 0%, #2d2d2d 100%)
        `,
        '&::before': {
          background: `
            radial-gradient(circle at 20% 20%, rgba(25, 118, 210, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(25, 118, 210, 0.05) 0%, transparent 50%)
          `,
        },
        '&::after': {
          background: `
            linear-gradient(45deg, transparent 48%, rgba(25, 118, 210, 0.03) 49%, rgba(25, 118, 210, 0.03) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(25, 118, 210, 0.03) 49%, rgba(25, 118, 210, 0.03) 51%, transparent 52%)
          `,
        },
      };
    }
    return {
      background: `
        linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(25, 118, 210, 0.1) 100%),
        linear-gradient(45deg, #f5f5f5 0%, #e0e0e0 100%)
      `,
      '&::before': {
        background: `
          radial-gradient(circle at 20% 20%, rgba(25, 118, 210, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(25, 118, 210, 0.1) 0%, transparent 50%)
        `,
      },
      '&::after': {
        background: `
          linear-gradient(45deg, transparent 48%, rgba(25, 118, 210, 0.05) 49%, rgba(25, 118, 210, 0.05) 51%, transparent 52%),
          linear-gradient(-45deg, transparent 48%, rgba(25, 118, 210, 0.05) 49%, rgba(25, 118, 210, 0.05) 51%, transparent 52%)
        `,
      },
    };
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        ...getBackgroundStyle(),
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        },
        '&::after': {
          backgroundSize: '30px 30px',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            textAlign: 'center',
            mb: 8,
            opacity: 0,
            animation: 'fadeIn 1s ease-out forwards',
            '@keyframes fadeIn': {
              '0%': {
                opacity: 0,
                transform: 'translateY(20px)',
              },
              '100%': {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
      <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #1976d2, #64b5f6)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            }}
          >
            My Projects
      </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(145deg, rgba(30, 30, 30, 0.9) 0%, rgba(45, 45, 45, 0.9) 100%)'
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 245, 245, 0.9) 100%)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                borderRadius: 2,
                opacity: 0,
                animation: 'fadeInUp 0.5s ease-out 0.1s forwards',
                '@keyframes fadeInUp': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateY(20px)',
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 3,
                }}
              >
                <CodeIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mr: 2 }} />
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                    background: 'linear-gradient(45deg, #1976d2, #64b5f6)',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Projects
                </Typography>
              </Box>
              <Grid container spacing={3}>
                {projects.map((project, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        height: '100%',
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(145deg, rgba(40, 40, 40, 0.9) 0%, rgba(55, 55, 55, 0.9) 100%)'
                          : 'linear-gradient(145deg, rgba(250, 250, 250, 0.9) 0%, rgba(240, 240, 240, 0.9) 100%)',
                        border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                        borderRadius: 2,
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: theme.palette.primary.main,
                          mb: 2,
                        }}
                      >
                        {project.title}
                </Typography>
                <Typography
                  variant="body1"
                        sx={{
                          color: theme.palette.text.primary,
                          mb: 2,
                        }}
                >
                  {project.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                        {project.technologies.map((tech, techIndex) => (
                    <Chip
                            key={techIndex}
                      label={tech}
                      size="small"
                            sx={{
                              mr: 1,
                              mb: 1,
                              backgroundColor: theme.palette.mode === 'dark'
                                ? 'rgba(255, 255, 255, 0.1)'
                                : 'rgba(0, 0, 0, 0.05)',
                              color: theme.palette.text.primary,
                              '&:hover': {
                                backgroundColor: theme.palette.mode === 'dark'
                                  ? 'rgba(255, 255, 255, 0.2)'
                                  : 'rgba(0, 0, 0, 0.1)',
                              },
                            }}
                    />
                  ))}
                </Box>
                    </Paper>
          </Grid>
        ))}
              </Grid>
            </Paper>
          </Grid>
      </Grid>
    </Container>
    </Box>
  );
};

export default Projects; 