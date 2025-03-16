// src/pages/Resources.jsx
import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

const Resources = () => {
  return (
    <Container sx={{ py: 8 }}>
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 'bold', mb: 4, color: 'primary.main' }}
        >
          Resources & Tips
        </Typography>
      </motion.div>

      <Grid container spacing={6}>
        {/* Leather Care Tips Section */}
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 'bold', mb: 2, color: 'primary.dark' }}
            >
              Leather Care Tips
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'text.primary' }}>
              Caring for your leather is essential for preserving its beauty and longevity. Here are some tried‑and‑true tips:
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    How to Wash Your Leather
                  </Typography>
                  <Typography variant="body2">
                    • Use a soft, damp cloth to gently wipe away dust and dirt.<br />
                    • Apply a specialized leather cleaner or a mild soap solution.<br />
                    • Avoid excessive water – never soak your leather.<br />
                    • Air dry naturally, away from direct sunlight or heat sources.<br />
                    • For deep cleaning, consider professional help.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Conditioning & Protection
                  </Typography>
                  <Typography variant="body2">
                    • Regularly apply a leather conditioner to keep it soft and supple.<br />
                    • Use a protective spray to shield against stains and water damage.<br />
                    • Test new products on a small area before full application.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>

        {/* How to Measure Section */}
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 'bold', mb: 2, color: 'primary.dark' }}
            >
              How to Measure Your Size
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'text.primary' }}>
              Achieving the perfect fit is crucial, especially for custom leather items. Follow these steps to measure accurately:
            </Typography>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                1. <strong>Chest:</strong> Measure around the fullest part of your chest while keeping the tape horizontal.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                2. <strong>Waist:</strong> Wrap the tape around the narrowest part of your waist.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                3. <strong>Shoulder Width:</strong> Measure from the edge of one shoulder to the other, across the back.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                4. <strong>Length:</strong> Measure from the top of your shoulder down to the desired hemline.
              </Typography>
              <Typography variant="body2">
                Accurate measurements ensure a better fit. If possible, have someone assist you to guarantee precision.
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        {/* FAQ Section */}
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 'bold', mb: 2, color: 'primary.dark' }}
            >
              Frequently Asked Questions
            </Typography>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  How often should I condition my leather?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  We recommend conditioning your leather every 3-6 months to keep it soft, supple, and protected from drying and cracking.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  What is the best way to clean my leather jacket?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  Use a soft, damp cloth along with a specialized leather cleaner. Avoid harsh chemicals that might strip the leather's natural oils.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  How do I know if my leather item needs professional repair?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  If your leather item has significant scratches, tears, or discoloration that doesn't improve with regular cleaning, it's best to consult a professional for restoration.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Resources;

