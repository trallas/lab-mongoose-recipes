const mongoose = require('mongoose');
const Recipe = require('./models/Recipe.model');
const data = require('./data');

const MONGODB_URI = 'mongodb://recipe-app';

mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    return Recipe.deleteMany()
  })
  .then(() => {
  
    let recipe1 = {
      "title": "Asian Glazed Chicken",
      "level": "Amateur Chef",
      "ingredients": [
        "1/2 cup rice vinegar",
        "5 tablespoons honey",
        "1/3 cup soy sauce"
      ],
      "cuisine": "Asian",
      "dishType": "main_course",
      "image": "../lab-mongoose-recipes/images/815964.jpg"
      "duration": 60,
      "creator": "Chef LePapu"
    }

    return Recipe.create(recipe1)
  })
  .then((x)=>{
    console.log("Single recipe added: ", x)
  })
  //Iteration 3:
  .then(()=>{
    return Recipe.insertMany(data)
  })
  .then((x)=>{
    console.log("Array of recipes added: ", x)
  })
  //Iteration 4:
  .then(()=>{
    return Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: 100})
  })
  .then(()=>{
    console.log("Recipe updated successfully!")
  })
  //Iteration 5:
  .then(()=>{
    return Recipe.deleteOne({title: "Carrot Cake"})
  })
  .then(()=>{
    console.log("Recipe deleted successfully!")
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });