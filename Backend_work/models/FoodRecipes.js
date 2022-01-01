const mongoose = require('mongoose');
const { Schema } = mongoose;

const FoodRecipeSchema = new Schema({
    Id:{
        type: String,
        required: true,
        unique: true
    },
    Name:{
        type: String,
        required: true,
    },
    Image:{
        type: String
    },
    Ingredients:{
        type: String
    },
    Description:{
        type: String
    },
    Video:{
        type: String
    }
  });

  module.exports = mongoose.model('foodRecipe',FoodRecipeSchema);