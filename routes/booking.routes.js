const express = require('express');
const bookingRoutes = express.Router();
const {BookingModel} = require('../models/booking.model');
const {FlightModel} = require('../models/flight.model');
const {UserModel} = require('../models/user.model');

// Create a new booking
bookingRoutes.post('/booking', async (req, res) => {
  try {
    const { userId, flightId } = req.body;

    // Check if the user and flight exist
    const user = await UserModel.findById(userId);
    const flight = await FlightModel.findById(flightId);

    if (!user || !flight) {
      return res.status(404).json({ error: 'User or flight not found' });
    }

    const booking = new BookingModel({ user: userId, flight: flightId });
    await booking.save();

    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    console.error('Error creating booking', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all bookings
bookingRoutes.get('/dashboard', async (req, res) => {
  try {
    const bookings = await BookingModel.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a specific booking by ID
bookingRoutes.get('/dashboard/:id', async (req, res) => {
  try {
    const booking = await BookingModel.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error('Error fetching booking', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a booking by ID
bookingRoutes.put('/dashboard/:id', async (req, res) => {
  try {
    const booking = await BookingModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking updated successfully', booking });
  } catch (error) {
    console.error('Error updating booking', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a booking by ID
bookingRoutes.delete('/dashboard/:id', async (req, res) => {
  try {
    const booking = await BookingModel.findByIdAndRemove(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(204).json();
  } catch (error) {
    console.error('Error deleting booking', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = bookingRoutes;
