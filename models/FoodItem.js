const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  titleAr: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  categoryAr: {
    type: String,
    required: true
  },
  imageName: {
    type: String,
    required: false
  },
  nutrientsPlaceholder: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('FoodItem', foodItemSchema);
