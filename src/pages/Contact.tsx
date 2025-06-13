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
import PersonIcon from '@mui/icons-material/Person';

const Contact = () => {
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
            Contact Information
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
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
                <PersonIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
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
                  Contact
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
                Email: bhagyashreebiradar669@gmail.com<br/>
                LinkedIn: <a href='https://www.linkedin.com/in/bhagyashree-biradar-4aa4252a7' style={{color:'#64b5f6'}}>bhagyashree-biradar-45a4215a7</a><br/>
                Contact Number: +91 7899545947
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
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
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 3,
                }}
              >
                <PersonIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
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
                  Personal Information
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
                Name: Bhagayashee B Biradar<br/>
                Permanent Address:Kirti nagar, Vijayapur (Bijapur), Karnataka 586101<br/>
                Current Address:Chandapura, Bengaluru, Karnataka 560098
                Contact Number: +91 7899545947
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 