// src/components/BeforeAfterSlider.jsx
import React, { useRef } from 'react';
import { Container, Box, Typography, Grid, Card, CardMedia, IconButton, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import before1 from '../assets/before_1.jpeg';
import after1 from '../assets/after_1.png'
import before2 from '../assets/before_2.jpeg'
import after2 from '../assets/after_2.png'
import before3 from '../assets/before_3.jpeg'
import after3 from '../assets/after_3.jpeg'


const beforeAfterData = [
  {
    beforeImage: before1,
    afterImage: after1,
  },
  {
    beforeImage: before2,
    afterImage: after2,
  },
  {
    beforeImage: before3,
    afterImage: after3,
  },
];

const BeforeAfterSlider = () => {
  const theme = useTheme();
  const swiperRef = useRef(null);

  return (
    <Box
      sx={{
        py: 10,
        background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 'bold',
            color: theme.palette.primary.dark, // Using theme color
            mb: 4,
          }}
        >
            Before &amp; After Transformations
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{
              mb: 6,
              color: theme.palette.text.secondary,
              fontSize: '1.1rem',
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Witness our remarkable craftsmanship through stunning transformations.
          </Typography>
        </motion.div>

        <Box sx={{ position: 'relative', px: { xs: 0, md: 4 } }}>
          <Swiper
            slidesPerView={1}
            spaceBetween={40}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              prevEl: '.custom-swiper-button-prev',
              nextEl: '.custom-swiper-button-next',
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className}" style="background-color: ${theme.palette.primary.main}; width: 12px; height: 12px; margin: 0 8px;"></span>`;
              }
            }}
            modules={[Autoplay, Navigation, Pagination]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            style={{
              paddingBottom: '60px',
              '--swiper-pagination-bullet-inactive-color': theme.palette.primary.light,
              '--swiper-pagination-bullet-inactive-opacity': 0.5
            }}
          >
            {beforeAfterData.map((item, index) => (
              <SwiperSlide key={index}>
                <Grid container spacing={4} justifyContent="center">
                  {/* Before Image */}
                  <Grid item xs={12} md={6}>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Card
                        sx={{
                          borderRadius: 4,
                          overflow: 'hidden',
                          boxShadow: 6,
                          position: 'relative',
                          '&:hover .before-label': {
                            transform: 'translateY(0)',
                            opacity: 1
                          }
                        }}
                      >
                        <CardMedia
                          component={motion.img}
                          whileHover={{ scale: 1.05 }}
                          height="500"
                          image={item.beforeImage}
                          alt={`Before ${index + 1}`}
                          sx={{
                            objectFit: 'cover',
                            cursor: 'pointer',
                            filter: 'brightness(0.9)'
                          }}
                        />
                        <Box
                          className="before-label"
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            bgcolor: 'rgba(0,0,0,0.7)',
                            p: 2,
                            transform: 'translateY(30%)',
                            opacity: 0.8,
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 'bold',
                              color: '#fff',
                              textAlign: 'center'
                            }}
                          >
                            Before
                          </Typography>
                        </Box>
                      </Card>
                    </motion.div>
                  </Grid>

                  {/* After Image */}
                  <Grid item xs={12} md={6}>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <Card
                        sx={{
                          borderRadius: 4,
                          overflow: 'hidden',
                          boxShadow: 6,
                          position: 'relative',
                          '&:hover .after-label': {
                            transform: 'translateY(0)',
                            opacity: 1
                          }
                        }}
                      >
                        <CardMedia
                          component={motion.img}
                          whileHover={{ scale: 1.05 }}
                          height="500"
                          image={item.afterImage}
                          alt={`After ${index + 1}`}
                          sx={{
                            objectFit: 'cover',
                            cursor: 'pointer',
                            filter: 'brightness(0.9)'
                          }}
                        />
                        <Box
                          className="after-label"
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            bgcolor: 'rgba(0,0,0,0.7)',
                            p: 2,
                            transform: 'translateY(30%)',
                            opacity: 0.8,
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 'bold',
                              color: '#fff',
                              textAlign: 'center'
                            }}
                          >
                            After
                          </Typography>
                        </Box>
                      </Card>
                    </motion.div>
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <IconButton
            className="custom-swiper-button-prev"
            onClick={() => swiperRef.current?.slidePrev()}
            sx={{
              position: 'absolute',
              top: '50%',
              left: { xs: 8, md: -40 },
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.4)',
              color: '#fff',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.6)',
                transform: 'translateY(-50%) scale(1.2)'
              },
              zIndex: 10,
              transition: 'all 0.3s ease',
              width: 48,
              height: 48
            }}
          >
            <ChevronLeft fontSize="large" />
          </IconButton>
          <IconButton
            className="custom-swiper-button-next"
            onClick={() => swiperRef.current?.slideNext()}
            sx={{
              position: 'absolute',
              top: '50%',
              right: { xs: 8, md: -40 },
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.4)',
              color: '#fff',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.6)',
                transform: 'translateY(-50%) scale(1.2)'
              },
              zIndex: 10,
              transition: 'all 0.3s ease',
              width: 48,
              height: 48
            }}
          >
            <ChevronRight fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default BeforeAfterSlider;