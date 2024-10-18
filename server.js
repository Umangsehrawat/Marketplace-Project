const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection string
mongoose.connect('mongodb+srv://umangsehrawat45:Lucifertom%401@cluster0.jm9f6.mongodb.net/Marketplace?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection failed:', error);
});

// Import Routes
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// Use Routes
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Marketplace API');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
