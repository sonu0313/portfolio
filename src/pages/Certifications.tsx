import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const Certifications = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const certifications = [
    {
      title: 'Google Cloud Certification: Cloud Data Engineer Professional Certificate',
      issuer: 'Google Cloud',
      date: 'Apr 2024',
    },
    {
      title: 'Data Engineering, Big Data, and Machine Learning on GCP Specialization',
      issuer: 'Google Cloud',
      date: 'Apr 2024',
    },
    {
      title: 'Configuration Management and the Cloud',
      issuer: 'Google',
      date: 'Apr 2024',
    },
    {
      title: 'Cloud Computing and Big Data',
      issuer: 'University of California, Irvine',
      date: 'Apr 2024',
    },
    {
      title: 'Introduction to Big Data with Spark and Hadoop',
      issuer: 'Udemy',
      date: 'Apr 2024',
    },
    {
      title: 'Foundations of Machine Learning',
      issuer: 'Great Learning',
      date: 'Apr 2024',
    },
    {
      title: 'Data Privacy and Security with Internet of Things',
      issuer: 'University of Colorado System',
      date: 'Apr 2024',
    },
    {
      title: 'Design and Make Infographics',
      issuer: 'California Institute of the Art',
      date: 'Dec 2023',
    },
    {
      title: 'Python Basics and Programming with Python',
      issuer: 'University of Colorado System',
      date: 'Sep 2023',
    },
    {
      title: 'Introduction to Microsoft Azure Cloud Services',
      issuer: 'Microsoft',
      date: 'Sep 2023',
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
                <SchoolIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mr: 2 }} />
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
                  Certifications
                </Typography>
              </Box>
              <Grid container spacing={3}>
                {certifications.map((cert, index) => (
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
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <CardGiftcardIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
                        <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
                          {cert.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                          mb: 1,
                        }}
                      >
                        {cert.issuer}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                          mb: 2,
                        }}
                      >
                        {cert.date}
                      </Typography>
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

export default Certifications; 