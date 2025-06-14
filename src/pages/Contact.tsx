import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const getBackgroundStyle = () => ({
    minHeight: '100vh',
    background: theme.palette.mode === 'dark'
      ? `
        linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(25, 118, 210, 0.1) 100%),
        linear-gradient(45deg, #1a1a1a 0%, #2d2d2d 100%)
      `
      : `
        linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(25, 118, 210, 0.1) 100%),
        linear-gradient(45deg, #f5f5f5 0%, #e0e0e0 100%)
      `,
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: theme.palette.mode === 'dark'
        ? `
          radial-gradient(circle at 20% 20%, rgba(25, 118, 210, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(25, 118, 210, 0.05) 0%, transparent 50%)
        `
        : `
          radial-gradient(circle at 20% 20%, rgba(25, 118, 210, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(25, 118, 210, 0.1) 0%, transparent 50%)
        `,
      zIndex: 0,
    },
  });

  return (
    <Box sx={getBackgroundStyle()}>
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
            Contact Me
          </Typography>
        </Box>

        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                background: theme.palette.mode === 'dark'
                  ? `
                    linear-gradient(145deg, rgba(30, 30, 30, 0.9) 0%, rgba(45, 45, 45, 0.9) 100%),
                    linear-gradient(45deg, rgba(25, 118, 210, 0.05) 0%, transparent 100%)
                  `
                  : `
                    linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 245, 245, 0.9) 100%),
                    linear-gradient(45deg, rgba(25, 118, 210, 0.05) 0%, transparent 100%)
                  `,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                borderRadius: 2,
                opacity: 0,
                animation: 'fadeInUp 0.5s ease-out 0.2s forwards',
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
              <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
                Get in Touch
              </Typography>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                  <Typography>Email: bhagyashribiradar669@gmail.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                  <Typography>Phone: +91 7899545947</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                  <Typography>Location: Bengaluru, India</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <IconButton
                  href="www.linkedin.com/in/bhagyashree-biradar-4aa4252a7"
                  target="_blank"
                  sx={{
                    color: theme.palette.primary.main,
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="https://github.com/sonu0313"
                  target="_blank"
                  sx={{
                    color: theme.palette.primary.main,
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 