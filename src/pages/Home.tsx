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
import CloudIcon from '@mui/icons-material/Cloud';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';

const features = [
  {
    title: 'Cloud Learning',
    description: 'Currently learning AWS and Azure fundamentals, focusing on core services and best practices.',
    icon: <CloudIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'DevOps Basics',
    description: 'Exploring CI/CD concepts, version control, and basic automation tools.',
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Infrastructure Basics',
    description: 'Learning about infrastructure management and basic deployment practices.',
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
  },
];

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        {/* Hero Section */}
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
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #1976d2, #64b5f6)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 800,
              fontSize: isMobile ? '2.8rem' : '4rem',
              letterSpacing: 1,
              fontFamily: 'Montserrat, sans-serif',
              mb: 1,
            }}
          >
            Bhagyashee Biradar
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              color: '#90caf9',
              fontWeight: 500,
              fontFamily: 'Montserrat, sans-serif',
              mb: 2,
              letterSpacing: 0.5,
            }}
          >
            Aspiring Cloud & DevOps Engineer
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'rgba(255,255,255,0.85)',
              fontStyle: 'italic',
              mb: 4,
              fontFamily: 'Montserrat, sans-serif',
              fontSize: isMobile ? '1.1rem' : '1.25rem',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Passionate about building scalable cloud solutions and driving digital transformation through technology.
          </Typography>
        </Box>

        {/* Features Section */}
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
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
                    '& .feature-icon': {
                      transform: 'scale(1.1)',
                      color: theme.palette.primary.main,
                    },
                  },
                }}
              >
                <Box
                  className="feature-icon"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3,
                    color: 'primary.main',
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  {feature.icon}
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      ml: 2,
                      background: 'linear-gradient(45deg, #1976d2, #64b5f6)',
                      backgroundClip: 'text',
                      textFillColor: 'transparent',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {feature.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 