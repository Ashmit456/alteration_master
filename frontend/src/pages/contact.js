// src/pages/Contact.jsx
import React from 'react';
import { Container, Box, Typography, Grid, Paper, useTheme, styled } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { motion, AnimatePresence } from 'framer-motion';

const StyledIconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  borderRadius: '50%',
  backgroundColor: theme.palette.background.default,
  marginRight: theme.spacing(2),
  transition: theme.transitions.create('all'),
}));

const Contact = () => {
  const theme = useTheme();

  const contactItems = [
    {
      icon: <PhoneIcon />,
      title: 'Direct Call',
      content: '+91 7053815709',
      color: theme.palette.secondary.main
    },
    {
      icon: <WhatsAppIcon />,
      title: 'WhatsApp Chat',
      content: '+91 7053815709, \n+91 9873535173',
      color: theme.palette.success.main
    },
    {
      icon: <LocationOnIcon />,
      title: 'Visit Us',
      content: '4733 Hardhyan Singh Road, Reghar Pura near Shani Mandir,\nKarol Bagh, 110005',
      color: theme.palette.error.main
    }
  ];

  return (
    <Container sx={{ py: 8, position: 'relative' }}>
      {/* Decorative background elements */}
      <Box sx={{
        position: 'absolute',
        top: -100,
        right: -100,
        width: 300,
        height: 300,
        background: `radial-gradient(${theme.palette.primary.light} 10%, transparent 70%)`,
        opacity: 0.1,
        zIndex: -1
      }} />

      {/* Header Section */}
      <Box 
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{ textAlign: 'center', mb: 8 }}
      >
        <Typography 
          variant="h3" 
          gutterBottom
          sx={{ 
            fontWeight: 800,
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
            letterSpacing: '-0.5px'
          }}
        >
          Get in Touch
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            color: theme.palette.text.secondary,
            fontSize: '1.1rem',
            maxWidth: 600,
            mx: 'auto',
            lineHeight: 1.7
          }}
        >
          We're here to help. Contact us through any of the options below.
        </Typography>
      </Box>

      {/* Contact Details & Map */}
      <Grid container spacing={6}>
        {/* Contact Details Column */}
        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4, 
                borderRadius: 4,
                background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
                position: 'relative',
                overflow: 'hidden',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: -50,
                  right: -50,
                  width: 100,
                  height: 100,
                  background: `linear-gradient(45deg, ${theme.palette.primary.light} 30%, transparent 100%)`,
                  borderRadius: '50%',
                  opacity: 0.1
                }
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4,
                  fontWeight: 700,
                  color: theme.palette.primary.dark,
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: 48,
                    height: 4,
                    background: theme.palette.primary.main,
                    borderRadius: 2
                  }
                }}
              >
                Contact Details
              </Typography>
              
              <Box sx={{ display: 'grid', gap: 3 }}>
                <AnimatePresence>
                  {contactItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Paper 
                        component={motion.div}
                        whileHover={{ 
                          scale: 1.02,
                          borderLeft: `4px solid ${item.color}`
                        }}
                        whileTap={{ scale: 0.98 }}
                        elevation={2}
                        sx={{ 
                          p: 3, 
                          borderRadius: 3,
                          display: 'flex',
                          alignItems: 'center',
                          borderLeft: '4px solid transparent',
                          transition: theme.transitions.create('all'),
                          cursor: 'pointer',
                          background: theme.palette.background.paper
                        }}
                      >
                        <StyledIconWrapper sx={{ color: item.color }}>
                          {React.cloneElement(item.icon, {
                            sx: { fontSize: '1.8rem' }
                          })}
                        </StyledIconWrapper>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                            {item.title}
                          </Typography>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: theme.palette.text.secondary,
                              whiteSpace: 'pre-line'
                            }}
                          >
                            {item.content}
                          </Typography>
                        </Box>
                      </Paper>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </Box>
            </Paper>
          </Box>
        </Grid>

        {/* Map Column */}
        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{ height: '100%', position: 'relative' }}
          >
            <Paper 
              component={motion.div}
              whileHover={{ scale: 1.01 }}
              elevation={6} 
              sx={{ 
                height: { xs: 400, md: 500 },
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
                transition: theme.transitions.create(['transform', 'box-shadow']),
                '&:hover': {
                  boxShadow: `0 24px 48px -12px ${theme.palette.primary.light}40`
                }
              }}
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.2471063481785!2d77.18503747632997!3d28.65231887565383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03aaa864858b%3A0x30612563c2255e34!2sAnand%20Leather%20house!5e0!3m2!1sen!2sin!4v1742113280979!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 4,
                  pointerEvents: 'none',
                  boxShadow: `inset 0 0 48px ${theme.palette.primary.light}20`
                }}
              />
              <Box
                component={motion.div}
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -100%)',
                  color: theme.palette.error.main,
                  fontSize: '3rem',
                  filter: `drop-shadow(0 4px 8px ${theme.palette.error.light}40)`
                }}
              >
                <LocationOnIcon fontSize="inherit" />
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;

