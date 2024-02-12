const mongoose = require('mongoose');
const fs = require('fs');

// Read the schema from userData.json
const userDataSchema = JSON.parse(fs.readFileSync('C:\Users\AvikPathak\ProjectMini\miniproject_blogs\backend\data\blogdata.json', 'utf-8'));

// Create a Mongoose schema based on the read data
const userSchema = new mongoose.Schema(userDataSchema);

// Create a Mongoose model
const User = mongoose.model('User', userSchema);

mongoose.connect('mongodb://localhost:27017/your_database', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  // Now you can perform operations with the User model (create, read, update, delete, etc.)

  // Example: Create a new user
  const newUser = new User({
    firstName: 'John',
    lastName: 'Doe',
    userID: 'john_doe123',
    email: 'john.doe@example.com',
    blogID: ['blog1', 'blog2']
  });

  newUser.save((err, savedUser) => {
    if (err) {
      console.error('Error saving user:', err);
    } else {
      console.log('User saved to database:', savedUser);
    }

    // Disconnect from MongoDB after saving
    
  });
});
