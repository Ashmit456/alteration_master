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
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  transition: theme.transitions.create('all'),
  '&:hover': {
    transform: 'translateX(4px)'
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
      {/* Mobile-optimized decorative background */}
      <Box sx={{
        position: 'absolute',
        top: -100,
        left: -100,
        width: 300,
        height: 300,
        [theme.breakpoints.up('md')]: {
          top: -200,
          left: -200,
          width: 600,
          height: 600,
        },
        background: `radial-gradient(${theme.palette.secondary.light} 10%, transparent 70%)`,
        opacity: 0.1,
        zIndex: -1
      }} />

      {/* Mobile-optimized Hero Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{
          height: { xs: '50vh', md: '60vh' },
          minHeight: 300,
          position: 'relative',
          mb: { xs: 4, md: 8 },
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
                mb: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: { xs: 1.2, md: 1.5 },
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
                mb: 3,
                fontSize: { xs: '1rem', sm: '1.25rem' },
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
                  px: { xs: 4, md: 6 },
                  py: 1,
                  fontSize: { xs: '0.9rem', md: '1.1rem' },
                  fontWeight: 600,
                  boxShadow: `0 8px 24px ${theme.palette.secondary.light}40`,
                }}
              >
                Explore Services
              </Button>
            </motion.div>
          </motion.div>
        </Box>
      </Box>

      {/* Mobile-optimized Services Section */}
      <Container id="services" sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, sm: 3 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
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
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: 3,
                    [theme.breakpoints.up('md')]: {
                      flexDirection: 'row',
                      boxShadow: 6
                    },
                    opacity: service.comingSoon ? 0.6 : 1,
                    filter: service.comingSoon ? 'grayscale(40%)' : 'none',
                  }}
                >
                  <CardMedia
                    component={motion.div}
                    whileHover={{ scale: 1.03 }}
                    sx={{
                      width: '100%',
                      height: 250,
                      [theme.breakpoints.up('md')]: {
                        width: 400,
                        height: 'auto'
                      },
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
                      }}
                    />
                  </CardMedia>

                  <CardContent sx={{ flex: 1, p: { xs: 2, md: 4 }, position: 'relative' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        component={motion.div}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: { xs: 40, md: 56 },
                          height: { xs: 40, md: 56 },
                          borderRadius: '50%',
                          bgcolor: theme.palette.background.paper,
                          mr: 2,
                          boxShadow: theme.shadows[2]
                        }}
                      >
                        <DesignServicesIcon sx={{ 
                          fontSize: { xs: 24, md: 32 }, 
                          color: theme.palette.secondary.main 
                        }} />
                      </Box>
                      <Typography variant="h5" sx={{ 
                        fontWeight: 700,
                        fontSize: { xs: '1.5rem', md: '2rem' }
                      }}>
                        {service.title}
                      </Typography>
                    </Box>

                    {/* Price & Timeline Chips */}
                    <Box sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 1, 
                      mb: 3 
                    }}>
                      <Chip
                        icon={<AttachMoneyIcon sx={{ fontSize: { xs: 16, md: 24 } }} />}
                        label={service.priceRange}
                        sx={{
                          bgcolor: theme.palette.primary.light + '20',
                          color: theme.palette.primary.dark,
                          fontWeight: 600,
                          fontSize: { xs: '0.75rem', sm: '0.875rem' }
                        }}
                      />
                      <Chip
                        icon={<ScheduleIcon sx={{ fontSize: { xs: 16, md: 24 } }} />}
                        label={service.timeline}
                        sx={{
                          bgcolor: theme.palette.secondary.light + '20',
                          color: theme.palette.secondary.dark,
                          fontWeight: 600,
                          fontSize: { xs: '0.75rem', sm: '0.875rem' }
                        }}
                      />
                    </Box>

                    <Grid container spacing={2} sx={{ mt: 1 }}>
                      {['process', 'features'].map((section, idx) => (
                        <Grid item xs={12} md={6} key={section}>
                          <Typography variant="h6" sx={{ 
                            mb: 2,
                            fontSize: { xs: '1rem', md: '1.25rem' },
                            fontWeight: 700,
                            position: 'relative',
                            '&:after': {
                              content: '""',
                              position: 'absolute',
                              bottom: -6,
                              left: 0,
                              width: 30,
                              height: 3,
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
                                mr: 1,
                                fontSize: { xs: '1.2rem', md: '1.5rem' },
                                color: theme.palette.secondary.main,
                              }} />
                              <Typography variant="body2" sx={{ 
                                fontWeight: 500,
                                fontSize: { xs: '0.875rem', md: '1rem' }
                              }}>
                                {point}
                              </Typography>
                            </StyledFeatureItem>
                          ))}
                        </Grid>
                      ))}
                    </Grid>

                    <Box sx={{ 
                      mt: 3, 
                      display: 'flex', 
                      flexDirection: { xs: 'column', sm: 'row' }, 
                      gap: 1.5 
                    }}>
                      <Button
                        variant="outlined"
                        color="secondary"
                        href="https://wa.me/917053815709"
                        target="_blank"
                        startIcon={<WhatsAppIcon sx={{ fontSize: { xs: 18, md: 24 } }} />}
                        sx={{
                          px: 3,
                          fontWeight: 600,
                          fontSize: { xs: '0.75rem', sm: '0.875rem' },
                          borderWidth: 2,
                          whiteSpace: 'nowrap'
                        }}
                      >
                        WhatsApp Us
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        href="/booking-form"
                        sx={{
                          px: 3,
                          fontWeight: 600,
                          fontSize: { xs: '0.75rem', sm: '0.875rem' },
                          boxShadow: `0 8px 16px ${theme.palette.secondary.light}30`,
                          whiteSpace: 'nowrap'
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
                        top: 16,
                        left: -60,
                        width: 200,
                        py: 0.5,
                        backgroundColor: theme.palette.error.main,
                        textAlign: 'center',
                        boxShadow: theme.shadows[2],
                        fontSize: { xs: '0.75rem', md: '1rem' }
                      }}
                    >
                      <Typography variant="h6" sx={{ 
                        color: 'white', 
                        fontWeight: 700,
                        fontSize: 'inherit'
                      }}>
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








