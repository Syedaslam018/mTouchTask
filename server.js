const express = require('express');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
const logRequests = require('./middlewares/loggerMiddleware');
const authRoutes = require('./routes/auth'); // Adjust the path as needed
const { specs, swaggerUi } = require('./swagger/swaggerConfig');

require('dotenv').config();


const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
connectDB();
app.use(express.json());
app.use(logRequests);

// Routes
app.use('/api/students', studentRoutes);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
