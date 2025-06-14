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
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import PsychologyIcon from '@mui/icons-material/Psychology';

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const technicalSkills = [
    { category: 'Programming Languages', skills: [
      'Python',
      'Java',
      'JavaScript',
      'C++',
      'C',
      'React'
    ]},
    { category: 'Web Technologies', skills: [
      'HTML',
      'CSS',
      'TypeScript'
    ]},
    { category: 'Developer Tools', skills: [
      'VS Code',
      'Power BI',
      'Git',
      'Jupyter Notebook'
    ]},
    { category: 'Design Tools', skills: [
      'Canva',
      'Adobe Illustrator',
    ]},
  ];

  const softSkills = [
    'Critical Thinking',
    'Logical Thinking',
    'Time Management',
    'Teamwork and Collaboration',
    'Self-Motivation and Initiative',
    'Work Ethic',
    'Problem Solving',
    'Communication',
    'Adaptability',
    'Attention to Detail'
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
            Skills & Expertise
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
                  Technical Skills
                </Typography>
              </Box>
              <Grid container spacing={2}>
                {technicalSkills.map((category, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.primary.main,
                        mb: 2,
                      }}
                    >
                      {category.category}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {category.skills.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          sx={{
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
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

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
                <PsychologyIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mr: 2 }} />
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
                  Soft Skills
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {softSkills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    sx={{
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
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills; 