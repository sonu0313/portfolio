import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  useTheme,
} from '@mui/material';

const certifications = [
  {
    name: 'Google Cloud Certification: Cloud Data Engineer Professional',
    issuer: 'Google Cloud',
    date: 'Apr 2024',
  },
  {
    name: 'Data Engineering, Big Data, and Machine Learning on GCP Specialization',
    issuer: 'Google Cloud',
    date: 'Apr 2024',
  },
  {
    name: 'Configuration Management and the Cloud',
    issuer: 'Google Cloud',
    date: 'Apr 2024',
  },
  {
    name: 'Data Engineering, Big Data, and Machine Learning on GCP',
    issuer: 'Google Cloud',
    date: 'Apr 2024',
  },
  {
    name: 'Introduction to Big Data with Spark and Hadoop',
    issuer: 'University of California, Irvine',
    date: 'Dec 2023',
  },
  {
    name: 'Introduction to Big Data Analytics',
    issuer: 'University of California, Irvine',
    date: 'Dec 2023',
  },
  {
    name: 'Foundations of Machine Learning',
    issuer: 'Coursera',
    date: 'Dec 2023',
  },
  {
    name: 'Big Data and Secure Networked Systems',
    issuer: 'University of Colorado System',
    date: 'Sep 2023',
  },
  {
    name: 'Creative Thinking: Techniques and Tools for Success',
    issuer: 'Imperial College of the Arts',
    date: 'Sep 2023',
  },
  {
    name: 'Python Basics and Programming with Python',
    issuer: 'University of Colorado System',
    date: 'Sep 2023',
  },
  {
    name: 'Introduction to Microsoft Azure Cloud Services',
    issuer: 'Microsoft',
    date: 'Sep 2023',
  },
];

const Certifications = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `
          linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(25, 118, 210, 0.1) 100%),
          linear-gradient(45deg, #1a1a1a 0%, #2d2d2d 100%)
        `,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(25, 118, 210, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(25, 118, 210, 0.05) 0%, transparent 50%)
          `,
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(45deg, transparent 48%, rgba(25, 118, 210, 0.03) 49%, rgba(25, 118, 210, 0.03) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(25, 118, 210, 0.03) 49%, rgba(25, 118, 210, 0.03) 51%, transparent 52%)
          `,
          backgroundSize: '30px 30px',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            textAlign: 'center',
            mb: 6,
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
            Learning Goals
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            paragraph
            sx={{
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Certifications I'm working towards
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  background: `
                    linear-gradient(145deg, rgba(30, 30, 30, 0.9) 0%, rgba(45, 45, 45, 0.9) 100%),
                    linear-gradient(45deg, rgba(25, 118, 210, 0.05) 0%, transparent 100%)
                  `,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 2,
                  opacity: 0,
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
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
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    sx={{
                      background: 'linear-gradient(45deg, #1976d2, #64b5f6)',
                      backgroundClip: 'text',
                      textFillColor: 'transparent',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {cert.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {cert.issuer}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cert.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Certifications; 