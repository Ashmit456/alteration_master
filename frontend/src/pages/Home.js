// src/pages/Home.jsx
import React from 'react';
import { Container, Box, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import ServiceShowcase from '../components/ServiceShowcase';
import WhyChooseUs from '../components/WhyChooseUs';  // If you store components separately
import BeforeAfterSection from '../components/before_after';  
// Import images from your assets folder
import heroImage from '../assets/hero.jpeg';
import service1 from '../assets/service1.jpeg';
import service2 from '../assets/service2.jpeg';
import service3 from '../assets/service3.jpeg';
import Client from '../assets/client.jpeg';

// Styled component for the Hero Section with a background image and overlay
const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${heroImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '80vh',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  textAlign: 'center',
}));

const overlayStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <Box sx={overlayStyles} />
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to Alteration-Master
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
              Luxury Leather Bags & Jacket Repair, Custom Jackets, & Upholstery
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              At Alteration-Master, we transform your cherished pieces into timeless works of art.
              Our artisans combine meticulous craftsmanship with a passion for elegance to restore,
              refine, and reinvent your luxury leather items. Whether it's a classic jacket, a designer bag,
              or a custom design, experience the excellence that defines our service.
            </Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              component="a"
              href="/services"  // Hyperlink to Services page
            >
              Discover Our Services
            </Button>
          </motion.div>
        </Container>
      </HeroSection>

      {/* Our Services Section */}
      <Container sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {/* Service Card 1 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  image={service1}
                  alt="Jacket & Bag Repair"
                  height="200"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Jacket & Bag Repair
                  </Typography>
                  <Typography>
                    Expert restoration to bring back the glory of your luxury leather jackets and bags.
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2, textAlign: 'center' }}>
                  <Button 
                    variant="outlined" 
                    color="secondary"
                    component="a"
                    href="/services#jacket-bag-repair"  // Update URL as needed
                  >
                    Learn More
                  </Button>
                </Box>
              </Card>
            </Grid>
            {/* Service Card 2 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  image={service2}
                  alt="Custom Jackets"
                  height="200"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Custom Jackets
                  </Typography>
                  <Typography>
                    Tailor-made designs that perfectly capture your style.
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2, textAlign: 'center' }}>
                  <Button 
                    variant="outlined" 
                    color="secondary"
                    component="a"
                    href="/services#custom-jackets"  // Update URL as needed
                  >
                    Learn More
                  </Button>
                </Box>
              </Card>
            </Grid>
            {/* Service Card 3 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  image={service3}
                  alt="Custom Upholstery"
                  height="200"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Custom Upholstery
                  </Typography>
                  <Typography>
                    Revitalize your leather items with our premium upholstery services.
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2, textAlign: 'center' }}>
                  <Button 
                    variant="outlined" 
                    color="secondary"
                    component="a"
                    href="/services#upholstery-restoration"  // Update URL as needed
                  >
                    Learn More
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Showcase Section */}
      <ServiceShowcase />

      {/* Before After Section */}
      <BeforeAfterSection />
      {/* Client Testimonials Section */}
      <Box sx={{ backgroundColor: '#f9f9f9', py: 8 }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              What Our Clients Say
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={5}>
                <Card sx={{ display: 'flex', p: 2, alignItems: 'center' }}>
                  <Box sx={{ mr: 2 }}>
                    <img
                      src={Client}
                      alt="Client 1"
                      style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="body1">
                      "Its the best leather store for customized leather prodcut restoration. I gave my LV bag for repairing and i am 100% satisfied with their work. Excellent top quality craftmanship with leather"
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      - shivam shrivastava
                    </Typography>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={5}>
                <Card sx={{ display: 'flex', p: 2, alignItems: 'center' }}>
                  <Box sx={{ mr: 2 }}>
                    <img
                      src={Client}
                      alt="Client 2"
                      style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="body1">
                      "Amazing quality of leather at a great price point can customize easily and design great work, best for jackets."
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      - Arnav Jain
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

    </div>
  );
};

export default Home;


