// src/components/Header.jsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Resources', path: '/resources' },
    { title: 'Contact', path: '/contact' },
  ];

  const toggleDrawer = (open) => (event) => {
    // Prevent tab or shift key presses from toggling drawer
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
        boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
      }}
    >
      <Toolbar>
        {/* Business Name on Extreme Left */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 'bold',
            mr: 2,
          }}
        >
          Alteration-Master
        </Typography>

        {isMobile ? (
          // Mobile View: Show hamburger menu with updated drawer items
          <>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {navLinks.map((link) => (
                    <ListItem
                      button
                      component={Link}
                      to={link.path}
                      key={link.title}
                    >
                      <ListItemText primary={link.title} />
                    </ListItem>
                  ))}
                  {/* Cool action items in mobile drawer */}
                  <ListItem button component={Link} to="/contact">
                    <ChatBubbleOutlineIcon sx={{ mr: 1 }} />
                    <ListItemText primary="Chat With Us" />
                  </ListItem>
                  <ListItem button component="a" href="tel:+1234567890">
                    <PhoneIcon sx={{ mr: 1 }} />
                    <ListItemText primary="Call Us" />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          // Desktop View: Show nav links in center and cool action items on the right
          <>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
              }}
            >
              {navLinks.map((link) => (
                <motion.div whileHover={{ scale: 1.1 }} key={link.title}>
                  <Button component={Link} to={link.path} color="inherit">
                    {link.title}
                  </Button>
                </motion.div>
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                component={Link}
                to="/contact"
                color="inherit"
                sx={{ p: 1 }}
              >
                <ChatBubbleOutlineIcon />
              </IconButton>
              <Button
                component="a"
                href="tel:+917053815709" // Replace with your actual number
                variant="outlined"
                color="inherit"
              >
                Call Us
              </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

