// src/pages/About.jsx
import React from 'react';
import { Container, Box, Typography, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import about from '../assets/about.jpg';

const About = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        sx={{
          height: { xs: 200, md: 400 },
          backgroundImage: `url(${about})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 8,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h2"
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            backgroundColor: 'rgba(0,0,0,0.6)',
            p: 3,
            borderRadius: 2,
            textAlign: 'center',
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          About Us
        </Typography>
      </Box>

      {/* Founder Details Section (Without Image) */}
      <Box sx={{ mb: 8 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: 'bold', mb: 2, color: theme.palette.primary.main }}
          >
            Mr. Manish Gupta
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, color: theme.palette.text.secondary, fontStyle: 'italic' }}
          >
            BTech in Leather Technology | HBTU Alumni
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.primary, lineHeight: 1.8 }}>
            With over 30 years of experience in the art and science of leather technology,
            Mr. Manish Gupta has become a renowned expert in the field. His journey began with a passion
            for innovative design and precision craftsmanship—a passion that led him to master the techniques
            of leather restoration, customization, and preservation. His expertise, honed over decades,
            has not only elevated the standards of quality in the industry but also inspired countless artisans
            to push the boundaries of traditional leather craftsmanship.
          </Typography>
        </Box>
      </Box>

      {/* Our Mission Section */}
      <Box sx={{ mb: 8 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          sx={{
            backgroundColor: theme.palette.background.paper,
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: 'bold', mb: 3, color: theme.palette.primary.main }}
          >
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.primary, lineHeight: 1.8 }}>
            At Luxury Leather Repair, our mission is to restore the timeless elegance of leather while blending
            traditional craftsmanship with modern innovation. We are committed to providing exceptional quality,
            personalized service, and sustainable solutions that honor the legacy of fine leatherwork. Every piece
            we handle is treated as a work of art—meticulously restored, refined, and reimagined to bring out its
            inherent beauty.
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.primary, lineHeight: 1.8 }}>
            We believe that quality is not just about repair—it's about preservation, passion, and a relentless
            pursuit of perfection. Let us help you transform your cherished items into enduring masterpieces.
          </Typography>
        </Box>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ mb: 8 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          sx={{
            backgroundColor: theme.palette.background.paper,
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: 'bold', mb: 3, color: theme.palette.primary.main }}
          >
            Why Choose Us?
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.primary, lineHeight: 1.8 }}>
            Our legacy of excellence is built on decades of expertise and a genuine passion for leather craftsmanship.
            We combine state-of-the-art technology with traditional artisanal techniques to deliver unmatched quality
            and personalized service. Whether it's a minor repair or a complete restoration, our commitment to perfection
            ensures that your prized possessions receive the care they deserve.
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.primary, lineHeight: 1.8 }}>
            Choose us for our deep industry knowledge, our dedication to using only premium materials, and a service
            philosophy that puts you at the center of everything we do. We are more than just repair experts—we are
            custodians of your legacy, dedicated to preserving the beauty and durability of your leather goods for generations to come.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
