import React from 'react';
import { Box, Container, Typography, Link, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
        color: theme.palette.primary.contrastText,
        py: 8,
        mt: 8,
        borderTop: `2px solid ${theme.palette.secondary.main}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography 
                variant="h5" 
                gutterBottom 
                sx={{ 
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: 1.2,
                }}
              >
                Alteration-Master
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                Premium leather restoration & customization experts with decades of craftsmanship experience.
              </Typography>
            </motion.div>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Contact Us
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <Typography variant="body2">
                  <Link href="tel:+917053815709" color="inherit" underline="hover">
                    +91 7053815709
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <Typography variant="body2">
                  <Link href="mailto:manish.alteration.master@gmail.com" color="inherit" underline="hover">
                  manish.alteration.master@gmail.com
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2">
                  4733 Hardhyan Singh Road, Reghar Pura near Shani Mandir,<br/>
                  Karol Bagh, 110005
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Our Guarantee Section */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Our Guarantee
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                We commit to delivering premium quality and unmatched craftsmanship in every project.
                Your satisfaction is our top priority.
              </Typography>
              <Typography variant="body2">
                For any inquiries, please reach out to us directly.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box 
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          sx={{ 
            mt: 6, 
            pt: 4, 
            borderTop: `1px solid ${theme.palette.primary.light}`, 
            textAlign: 'center' 
          }}
        >
          <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
            © {new Date().getFullYear()} Alteration-Master. All rights reserved.<br/>
            Crafted with ❤️ by Leather Artisans
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
