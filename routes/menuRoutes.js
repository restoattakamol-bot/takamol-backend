const express = require('express');
const FoodItem = require('../models/FoodItem');
const router = express.Router();

// Get all food items grouped by category (or just a flat list)
router.get('/', async (req, res) => {
  try {
    const items = await FoodItem.find({});
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific food item
router.get('/:id', async (req, res) => {
  try {
    const item = await FoodItem.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
