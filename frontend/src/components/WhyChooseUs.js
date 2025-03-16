import { Container, Typography, Grid, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DiamondIcon from '@mui/icons-material/Diamond';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const WhyChooseUs = () => {
  const theme = useTheme();

  return (
    <Container sx={{ py: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Section Title */}
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 'bold',
            color: theme.palette.primary.dark, // Using theme color
            mb: 4,
          }}
        >
          Why Choose Us?
        </Typography>

        <Grid container spacing={6} alignItems="center">
          {/* Left Column: Description */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: theme.palette.primary.dark,
                  mb: 2,
                }}
              >
                Elevate Your Leather Experience
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                With over <strong>40 years of craftsmanship</strong>, we specialize in restoring luxury leather items,
                ensuring unmatched quality and excellence. From <strong>handbag repairs</strong> to <strong>custom leather restoration</strong>,
                trust us to breathe new life into your cherished possessions.
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                We use <strong>premium materials</strong>, advanced techniques, and a <strong>personalized approach</strong>
                to exceed expectations—delivering timeless elegance and durability.
              </Typography>
            </motion.div>
          </Grid>

          {/* Right Column: Timeline */}
          <Grid item xs={12} md={7}>
            <Timeline position="right">
              {/* Point 1: Craftsmanship */}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ backgroundColor: theme.palette.secondary.main }}>
                    <WorkspacePremiumIcon sx={{ color: '#fff' }} />
                  </TimelineDot>
                  <TimelineConnector sx={{ backgroundColor: theme.palette.secondary.main }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.dark }}>
                    Unmatched Craftsmanship
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    Our master artisans carefully restore luxury leather goods, ensuring <strong>perfection in every detail</strong>.
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              {/* Point 2: Premium Materials */}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ backgroundColor: theme.palette.secondary.main }}>
                    <DiamondIcon sx={{ color: '#fff' }} />
                  </TimelineDot>
                  <TimelineConnector sx={{ backgroundColor: theme.palette.secondary.main }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.dark }}>
                    Premium Materials
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    We source <strong>only the finest leather, dyes, and materials</strong> from world-renowned brands for restoration.
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              {/* Point 3: Personalized Service */}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ backgroundColor: theme.palette.secondary.main }}>
                    <HandshakeIcon sx={{ color: '#fff' }} />
                  </TimelineDot>
                  <TimelineConnector sx={{ backgroundColor: theme.palette.secondary.main }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.dark }}>
                    Personalized Service
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    We <strong>tailor every repair</strong> to your needs, ensuring <strong>a truly bespoke experience</strong>.
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              {/* Point 4: Pickup & Delivery */}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ backgroundColor: theme.palette.secondary.main }}>
                    <LocalShippingIcon sx={{ color: '#fff' }} />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.dark }}>
                    Convenient Pickup & Delivery
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    Enjoy a seamless service with <strong>doorstep pickup and delivery</strong> for your leather repairs.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default WhyChooseUs;

