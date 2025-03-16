// src/components/ServiceShowcase.jsx
import React, { useRef } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';

// Import service images
import beforeAfter from '../assets/before-after.jpeg';
import customJacket from '../assets/custom-jacket.jpeg';
import upholstery from '../assets/upholstery.jpeg';

// Updated services data without a static price property
const services = [
  {
    title: 'Luxury Leather Repair - Before & After',
    description: 'Expert restoration to make your leather look brand new.',
    image: beforeAfter,
  },
  {
    title: 'Custom Jackets - Tailored for You',
    description: 'Fully customized leather jackets designed to perfection.',
    image: customJacket,
  },
  {
    title: 'Upholstery Restoration',
    description: 'Premium furniture & car seat restoration with top-grade leather.',
    image: upholstery,
  },
];

const ServiceShowcase = () => {
  const theme = useTheme();
  const swiperRef = useRef(null);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        py: 4,
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.light} 100%)`,
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <Typography variant="h5" fontWeight="bold" color="#fff" gutterBottom>
        Our Exclusive Services
      </Typography>
      <Typography variant="subtitle2" color="#fff" mb={3}>
        Premium craftsmanship with transparent pricing
      </Typography>
      
      <Box
        sx={{
          width: '80%',
          margin: '0 auto',
          position: 'relative',
          overflow: 'visible',
          '& .swiper-slide:not(.swiper-slide-active)': {
            filter: 'blur(4px)',
            opacity: 0.6,
            transform: 'scale(0.8)',
          },
          '& .swiper-slide': {
            transition: 'transform 0.3s, filter 0.3s, opacity 0.3s',
          },
        }}
      >
        <Swiper
          slidesPerView={isSmallScreen ? 1 : 3}
          centeredSlides={true}
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          loopedSlides={services.length}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            1024: { 
              slidesPerView: 3,
              spaceBetween: 40
            },
          }}
          modules={[Autoplay]}
          style={{ paddingBottom: '30px' }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ position: 'relative' }}
              >
                <Card sx={{ boxShadow: 3, borderRadius: '8px' }}>
                  <CardMedia
                    component="img"
                    image={service.image}
                    alt={service.title}
                    sx={{
                      height: isSmallScreen ? 200 : 300,
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent sx={{ textAlign: 'left' }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" mt={1}>
                      {service.description}
                    </Typography>
                    <Typography variant="subtitle1" mt={1} color={theme.palette.warning.main}>
                      Price: Determined according to damage
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <IconButton
          onClick={() => swiperRef.current?.slidePrev()}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '-40px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.4)',
            color: '#fff',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
            zIndex: 10,
          }}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          onClick={() => swiperRef.current?.slideNext()}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '-40px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.4)',
            color: '#fff',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
            zIndex: 10,
          }}
        >
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ServiceShowcase;

