//Mongo DB code for profile page

const mongoose = require('mongoose');

// Define a schema for the user collection
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

// Create a model for the user collection
const User = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Create a new user document
    const newUser = new User({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com'
    });

    // Save the user document to the collection
    newUser.save()
      .then(() => {
        console.log('User saved successfully');
      })
      .catch(error => {
        console.error('Error saving user:', error);
      });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
