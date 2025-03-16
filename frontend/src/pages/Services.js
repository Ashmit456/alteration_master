import React from 'react';
import { Container, Box, Typography, Grid, Card, CardMedia, CardContent, Button, useTheme, Chip, styled } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Import images from assets folder
import beforeAfter from '../assets/before-after.jpeg';
import customJacket from '../assets/custom-jacket.jpeg';
import upholstery from '../assets/upholstery.jpeg';
import serviceHero from '../assets/service-hero.jpg';

const StyledFeatureItem = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  transition: theme.transitions.create('all'),
  '&:hover': {
    transform: 'translateX(8px)'
  }
}));

const servicesData = [
  {
    title: "Jacket & Bag Repair",
    image: beforeAfter,
    priceRange: "Price according to damage",
    process: [
      "Free initial assessment",
      "Pick-up and drop service available",
      "Expert repair using premium leather and chemicals",
      "Quality inspection & final touches",
    ],
    features: [
      "Eco-friendly cleaning solutions",
      "Hardware replacement included",
      "Best color matching guarantee",
    ],
    timeline: "Time according to damage",
  },
  {
    title: "Custom Jacket Design",
    image: customJacket,
    priceRange: "Price according to design",
    process: [
      "Free design consultation",
      "Body measurements session",
      "Material selection (50+ options)",
      "3D prototype preview",
      "Final adjustments & delivery",
    ],
    features: [
      "100% handmade craftsmanship",
      "Premium imported leathers",
      "Lifetime maintenance support",
      "Custom embossing/engraving",
      "Interior lining customization",
    ],
    timeline: "Time according to complexity of design",
  },
  {
    title: "Upholstery Restoration",
    image: upholstery,
    priceRange: "Price according to damage",
    process: [
      "On-site damage assessment",
      "Historical preservation analysis",
      "Material sourcing consultation",
      "In-house restoration process",
      "Final quality assurance check",
    ],
    features: [
      "Antique-friendly techniques",
      "UV protection treatment",
      "Mold & mildew prevention",
      "Structural reinforcement",
      "Odor elimination guarantee",
    ],
    timeline: "Time according to damage",
    comingSoon: true, // Indicates this service is disabled
  },
];


const ServicesPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ pt: 0, position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background elements */}
      <Box sx={{
        position: 'absolute',
        top: -200,
        left: -200,
        width: 600,
        height: 600,
        background: `radial-gradient(${theme.palette.secondary.light} 10%, transparent 70%)`,
        opacity: 0.1,
        zIndex: -1
      }} />

      {/* Hero Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{
          height: '60vh',
          minHeight: 400,
          position: 'relative',
          mb: 8,
          overflow: 'hidden',
        }}
      >
        <CardMedia
          component={motion.img}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
          image={serviceHero}
          alt="Luxury leather services"
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.4)',
          }}
        />
        <Box
          sx={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            px: 2,
          }}
        >
          <motion.div initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>
            <Typography
              variant="h2"
              component={motion.h1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              sx={{
                fontWeight: 800,
                mb: 3,
                background: `linear-gradient(45deg, ${theme.palette.common.white} 30%, ${theme.palette.secondary.light} 90%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 8px rgba(0,0,0,0.2)'
              }}
            >
              Masterful Leather Craftsmanship
            </Typography>
            <Typography
              variant="h5"
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              sx={{
                maxWidth: 800,
                mx: 'auto',
                mb: 4,
                color: theme.palette.common.white,
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Transform your leather goods with our expert restoration, custom design, and premium care services
            </Typography>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 150 }}
            >
              <Button
                variant="contained"
                color="secondary"
                size="large"
                href="#services"
                sx={{
                  px: 6,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  boxShadow: `0 8px 24px ${theme.palette.secondary.light}40`,
                  '&:hover': {
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Explore Services
              </Button>
            </motion.div>
          </motion.div>
        </Box>
      </Box>

      {/* Services Section */}
      <Container id="services" sx={{ py: 6 }}>
        <Grid container spacing={6}>
          <AnimatePresence>
            {servicesData.map((service, index) => (
              <Grid item xs={12} key={index}>
                <Card
                  component={motion.div}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: 6,
                    position: 'relative',
                    opacity: service.comingSoon ? 0.6 : 1,
                    filter: service.comingSoon ? 'grayscale(40%)' : 'none',
                    '&:hover': {
                      boxShadow: `0 24px 48px -12px ${theme.palette.primary.light}40`
                    }
                  }}
                >
                  <CardMedia
                    component={motion.div}
                    whileHover={{ scale: 1.05 }}
                    sx={{
                      width: { xs: '100%', md: 400 },
                      height: { xs: 300, md: 'auto' },
                      overflow: 'hidden'
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </CardMedia>

                  <CardContent sx={{ flex: 1, p: 4, position: 'relative' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box
                        component={motion.div}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 56,
                          height: 56,
                          borderRadius: '50%',
                          bgcolor: theme.palette.background.paper,
                          mr: 3,
                          boxShadow: theme.shadows[4]
                        }}
                      >
                        <DesignServicesIcon sx={{ fontSize: 32, color: theme.palette.secondary.main }} />
                      </Box>
                      <Typography variant="h4" sx={{ fontWeight: 800 }}>
                        {service.title}
                      </Typography>
                    </Box>

                    {/* Price & Timeline Chips */}
                    <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                      <Chip
                        icon={<AttachMoneyIcon />}
                        label={service.priceRange}
                        sx={{
                          bgcolor: theme.palette.primary.light + '20',
                          color: theme.palette.primary.dark,
                          fontWeight: 600
                        }}
                      />
                      <Chip
                        icon={<ScheduleIcon />}
                        label={service.timeline}
                        sx={{
                          bgcolor: theme.palette.secondary.light + '20',
                          color: theme.palette.secondary.dark,
                          fontWeight: 600
                        }}
                      />
                    </Box>

                    <Grid container spacing={4} sx={{ mt: 2 }}>
                      {['process', 'features'].map((section, idx) => (
                        <Grid item xs={12} md={6} key={section}>
                          <Typography variant="h6" sx={{ 
                            mb: 3,
                            fontWeight: 700,
                            position: 'relative',
                            '&:after': {
                              content: '""',
                              position: 'absolute',
                              bottom: -8,
                              left: 0,
                              width: 40,
                              height: 4,
                              background: theme.palette.primary.main,
                              borderRadius: 2
                            }
                          }}>
                            {section === 'process' ? 'Process Overview' : 'Key Features'}
                          </Typography>
                          {service[section].map((point, idx) => (
                            <StyledFeatureItem
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <CheckIcon sx={{ 
                                mr: 2,
                                color: theme.palette.secondary.main,
                                fontSize: '1.5rem'
                              }} />
                              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                {point}
                              </Typography>
                            </StyledFeatureItem>
                          ))}
                        </Grid>
                      ))}
                    </Grid>

                    <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                      <Button
                        variant="outlined"
                        color="secondary"
                        href="https://wa.me/917053815709"
                        target="_blank"
                        startIcon={<WhatsAppIcon />}
                        sx={{
                          px: 4,
                          fontWeight: 600,
                          borderWidth: 2,
                          '&:hover': {
                            borderWidth: 2,
                            bgcolor: theme.palette.secondary.light + '10'
                          }
                        }}
                      >
                        WhatsApp Us
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        href="/booking-form"
                        sx={{
                          px: 4,
                          fontWeight: 600,
                          boxShadow: `0 8px 16px ${theme.palette.secondary.light}30`,
                          '&:hover': {
                            transform: 'translateY(-2px)'
                          }
                        }}
                      >
                        Book Now
                      </Button>
                    </Box>
                  </CardContent>

                  {service.comingSoon && (
                    <Box
                      component={motion.div}
                      initial={{ rotate: -45, scale: 0 }}
                      animate={{ rotate: -45, scale: 1 }}
                      sx={{
                        position: 'absolute',
                        top: 20,
                        left: -80,
                        width: 300,
                        py: 1,
                        backgroundColor: theme.palette.error.main,
                        textAlign: 'center',
                        boxShadow: theme.shadows[4]
                      }}
                    >
                      <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
                        COMING SOON
                      </Typography>
                    </Box>
                  )}
                </Card>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesPage;







