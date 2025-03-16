// src/pages/BookingForm.jsx
import React, { useState, useRef } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    description: '',
    productImage: null,
  });
  const recaptchaRef = useRef();

  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'productImage') {
      setFormData((prevData) => ({ ...prevData, productImage: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email field (required and valid)
    if (!formData.email || !emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Retrieve reCAPTCHA token
    const recaptchaToken = recaptchaRef.current.getValue();
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA.');
      return;
    }

    // Create a FormData object to handle file uploads
    const payload = new FormData();
    payload.append('name', formData.name);
    payload.append('phone', formData.phone);
    payload.append('email', formData.email);
    payload.append('service', formData.service);
    payload.append('description', formData.description);
    payload.append('recaptchaToken', recaptchaToken);
    if (formData.productImage) {
      payload.append('productImage', formData.productImage);
    }

    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/bookings`, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(data.message);
      // Reset the form
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        description: '',
        productImage: null,
      });
      recaptchaRef.current.reset();
    } catch (error) {
      console.error('Error submitting booking:', error.response ? error.response.data : error.message);
      alert('An error occurred while submitting your booking.');
    }
  };

  return (
    <Container sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Book Now
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          We will be happy to serve you! You are just one step away 😊
        </Typography>
      </Box>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 600,
          mx: 'auto',
          p: 3,
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: 3,
        }}
      >
        <Grid container spacing={2}>
          {/* Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          {/* Phone Number */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="phone"
              label="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </Grid>
          {/* Email (Required) */}
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              type="email"
            />
          </Grid>
          {/* Upload Product Image */}
          <Grid item xs={12}>
            <Button variant="outlined" component="label" startIcon={<UploadFileIcon />}>
              Upload Product Image
              <input type="file" name="productImage" hidden onChange={handleChange} />
            </Button>
            {formData.productImage && (
              <Typography variant="body2" sx={{ mt: 1 }}>
                {formData.productImage.name}{' '}
                <CheckCircleOutlineIcon color="success" fontSize="small" />
              </Typography>
            )}
          </Grid>
          {/* Service Dropdown */}
          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel id="service-label">Select Service</InputLabel>
              <Select
                labelId="service-label"
                name="service"
                label="Select Service"
                value={formData.service}
                onChange={handleChange}
              >
                <MenuItem value="jacketRepair">Jacket Repair</MenuItem>
                <MenuItem value="customJacket">Custom Jacket</MenuItem>
                <MenuItem disabled value="upholsteryRestoration">
                  Upholstery Restoration (Coming Soon)
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* Description Box */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="description"
              label="Describe Your Requirement"
              multiline
              rows={4}
              value={formData.description}
              onChange={handleChange}
              helperText="Tell us what you need: For Jacket Repair, we do pick, repair, and drop. For Custom Jacket, we ask for design inspiration and body measurements. For Upholstery, our agent will visit, assess, and provide an estimate."
            />
          </Grid>
          {/* reCAPTCHA */}
          <Grid item xs={12}>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Lc38e4qAAAAAAGR2PL5l_3haYSZsSxOZ-Yw5qV2" // Replace with your actual site key
            />
          </Grid>
        </Grid>
        {/* Submit Button */}
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Button type="submit" variant="contained" color="secondary">
            Submit Booking Request
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default BookingForm;




