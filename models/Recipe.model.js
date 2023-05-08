const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]
  },
  ingredients: [String],
  cuisine: {
    type: String,
    required: true
  },
  dishType: {
    type: String,
    enum: ["breakfast", "main_course", "soup", "snack", "drink", "dessert"]
  },
  image: {
    type: String,
    default: "../images/75131.jpg"
  },
  },
  creator: String,
  created: {
    type: Date,
    default: Date.now
  }
);
const Recipe = mongoose.model('Recipe', recipeSchema);