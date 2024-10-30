const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://quanghuyvudang:Picky123456.@wcoproject.f6ljb.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Create Order Schema and Model
const orderSchema = new mongoose.Schema({
  food: String,
  drink: String,
  address: String,
  address2: String,
  city: String,
  state: String,
  zip: String
});

const Order = mongoose.model('Order', orderSchema);

// Create an API endpoint to handle order submission
app.post('/submit-order', async (req, res) => {
  try {
    const { food, drink, address, address2, city, state, zip } = req.body;

    // Create a new order document in MongoDB
    const newOrder = new Order({
      food,
      drink,
      address,
      address2,
      city,
      state,
      zip,
    });

    await newOrder.save();

    res.status(200).json({ message: 'Order saved successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving order', error: err.message });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
