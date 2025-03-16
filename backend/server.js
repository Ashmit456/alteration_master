const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const multer = require('multer');
const path = require('path');
const fs = require('fs'); // Import the fs module for file deletion

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Ensure the uploads directory exists; if not, create it
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log(`Created uploads directory at ${uploadsDir}`);
}

// Trust proxy
app.set('trust proxy', 1);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate Limiting: 100 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again later.',
});
app.use(limiter);

// Multer for file uploads using the verified uploads directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Serve static files from uploads folder
app.use('/uploads', express.static(uploadsDir));

// Nodemailer Transporter (configured for Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail App Password
  },
});

// Middleware: Validate Booking Data
const validateBooking = (req, res, next) => {
  const { name, phone, email, service, description } = req.body;
  if (!name || !phone || !email || !service || !description) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }
  if (!/^\+?\d{10,15}$/.test(phone)) {
    return res.status(400).json({ error: 'Invalid phone number format.' });
  }
  next();
};

// Middleware: Verify reCAPTCHA
const verifyRecaptcha = async (req, res, next) => {
  const { recaptchaToken } = req.body;
  if (!recaptchaToken) {
    return res.status(400).json({ error: 'Missing reCAPTCHA token.' });
  }
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
    );
    console.log('reCAPTCHA response:', response.data);
    if (!response.data.success) {
      return res.status(400).json({ error: 'reCAPTCHA verification failed.' });
    }
    next();
  } catch (error) {
    return res.status(500).json({ error: 'Error verifying reCAPTCHA.' });
  }
};

// Booking API Endpoint
app.post('/api/bookings', upload.single('productImage'), validateBooking, verifyRecaptcha, async (req, res) => {
  const { name, phone, email, service, description } = req.body;
  const productImage = req.file ? `/uploads/${req.file.filename}` : null;

  // Use the ADMIN_EMAIL environment variable; fallback to EMAIL_USER if not set.
  const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;

  try {
    // Prepare mail options for admin (order info)
    const mailOptionsAdmin = {
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: 'New Booking Received - Alteration Master',
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Service:</strong> ${service}</p>
             <p><strong>Description:</strong><br/> ${description}</p>
             ${productImage ? `<p><strong>Image:</strong> <a href="${process.env.BASE_URL}${productImage}" target="_blank">View Image</a></p>` : ''}`,
      attachments: productImage ? [{
         filename: req.file.originalname,
         path: req.file.path,
         cid: 'productImageCID'
      }] : [],
    };

    if (productImage) {
      mailOptionsAdmin.html += `<p><img src="cid:productImageCID" style="max-width:300px;"/></p>`;
    }

    // Send email to admin
    await transporter.sendMail(mailOptionsAdmin);
    console.log(`Admin email sent to ${adminEmail} with booking details.`);

    // Prepare mail options for user (confirmation)
    const mailOptionsUser = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Booking Confirmation - Alteration Master',
      html: `<p>Hi ${name},</p>
             <p>Thank you for your booking request for <b>${service}</b>.</p>
             <p>We have received your order and will contact you soon.</p>
             <p>Regards,<br>Alteration Master Team</p>`,
    };

    // Send confirmation email to user
    await transporter.sendMail(mailOptionsUser);
    console.log(`Confirmation email sent to user (${email}).`);

    // Delete the temporary file if it exists
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) {
          console.error('Error deleting temporary file:', err);
        } else {
          console.log('Temporary file deleted:', req.file.path);
        }
      });
    }

    res.status(200).json({ message: 'Booking received, confirmation email sent to you and order details sent to admin.', imageUrl: productImage });
  } catch (error) {
    console.error('Error sending email:', error.response || error);
    res.status(500).json({ error: 'Failed to send booking details email.' });
  }
});

// Test Route
app.get('/', (req, res) => {
  res.send('Alteration-Master API is running.');
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





