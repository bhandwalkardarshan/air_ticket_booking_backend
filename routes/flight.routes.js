const express = require('express');
const flightRoutes = express.Router();
const {FlightModel} = require('../models/flight.model');

// Create a new flight
flightRoutes.post('/', async (req, res) => {
  try {
    const flight = new FlightModel(req.body);
    await flight.save();
    res.status(201).json({ message: 'Flight created successfully', flight });
  } catch (error) {
    console.error('Error creating flight', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all available flights
flightRoutes.get('/', async (req, res) => {
  try {
    const flights = await FlightModel.find();
    res.status(200).json(flights);
  } catch (error) {
    console.error('Error fetching flights', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a specific flight by ID
flightRoutes.get('/:id', async (req, res) => {
  try {
    const flight = await FlightModel.findById(req.params.id);
    if (!flight) {
      return res.status(404).json({ error: 'Flight not found' });
    }
    res.status(200).json(flight);
  } catch (error) {
    console.error('Error fetching flight', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a flight by ID
flightRoutes.put('/:id', async (req, res) => {
  try {
    const flight = await FlightModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!flight) {
      return res.status(404).json({ error: 'Flight not found' });
    }
    res.status(204).json({ message: 'Flight updated successfully', flight });
  } catch (error) {
    console.error('Error updating flight', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a flight by ID
flightRoutes.delete('/:id', async (req, res) => {
  try {
    const flight = await FlightModel.findByIdAndRemove(req.params.id);
    if (!flight) {
      return res.status(404).json({ error: 'Flight not found' });
    }
    res.status(202).json();
  } catch (error) {
    console.error('Error deleting flight', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = flightRoutes;
