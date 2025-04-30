const express = require('express');
const connectDB = require('./src/config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', require('./src/routes/auth'));

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
