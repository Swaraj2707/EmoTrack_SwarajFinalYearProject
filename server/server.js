// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 8000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Dummy data for demonstration
// let data = [
//     { id: 1, name: "Item 1", description: "This is item 1" },
//     { id: 2, name: "Item 2", description: "This is item 2" },
// ];

// // Get all items
// app.get('/items', (req, res) => {
//     res.json(data);
// });

// // Get a specific item
// app.get('/items/:id', (req, res) => {
//     const id = parseInt(req.params.id, 10);
//     const item = data.find(d => d.id === id);
//     if (item) {
//         res.json(item);
//     } else {
//         res.status(404).json({ error: "Item not found" });
//     }
// });

// // Create a new item
// app.post('/items', (req, res) => {
//     const newItem = req.body;
//     newItem.id = data.length ? data[data.length - 1].id + 1 : 1;
//     data.push(newItem);
//     res.status(201).json(newItem);
// });

// // Update an item
// app.put('/items/:id', (req, res) => {
//     const id = parseInt(req.params.id, 10);
//     const index = data.findIndex(d => d.id === id);
//     if (index !== -1) {
//         data[index] = { ...data[index], ...req.body };
//         res.json(data[index]);
//     } else {
//         res.status(404).json({ error: "Item not found" });
//     }
// });

// // Delete an item
// app.delete('/items/:id', (req, res) => {
//     const id = parseInt(req.params.id, 10);
//     const index = data.findIndex(d => d.id === id);
//     if (index !== -1) {
//         const deletedItem = data.splice(index, 1);
//         res.json(deletedItem);
//     } else {
//         res.status(404).json({ error: "Item not found" });
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });


//updated this on 26 may 24

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();
// const port = 8000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/emotrack', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected...'))
//     .catch(err => console.log(err));

// // Import and use profile routes
// const profileRoutes = require('./routes/routeProfile');
// app.use('/api/profile', profileRoutes);

// // Dummy data for demonstration (existing functionality)
// let data = [
//     { id: 1, name: "Item 1", description: "This is item 1" },
//     { id: 2, name: "Item 2", description: "This is item 2" },
// ];

// // Get all items
// app.get('/items', (req, res) => {
//     res.json(data);
// });

// // Get a specific item
// app.get('/items/:id', (req, res) => {
//     const id = parseInt(req.params.id, 10);
//     const item = data.find(d => d.id === id);
//     if (item) {
//         res.json(item);
//     } else {
//         res.status(404).json({ error: "Item not found" });
//     }
// });

// // Create a new item
// app.post('/items', (req, res) => {
//     const newItem = req.body;
//     newItem.id = data.length ? data[data.length - 1].id + 1 : 1;
//     data.push(newItem);
//     res.status(201).json(newItem);
// });

// // Update an item
// app.put('/items/:id', (req, res) => {
//     const id = parseInt(req.params.id, 10);
//     const index = data.findIndex(d => d.id === id);
//     if (index !== -1) {
//         data[index] = { ...data[index], ...req.body };
//         res.json(data[index]);
//     } else {
//         res.status(404).json({ error: "Item not found" });
//     }
// });

// // Delete an item
// app.delete('/items/:id', (req, res) => {
//     const id = parseInt(req.params.id, 10);
//     const index = data.findIndex(d => d.id === id);
//     if (index !== -1) {
//         const deletedItem = data.splice(index, 1);
//         res.json(deletedItem);
//     } else {
//         res.status(404).json({ error: "Item not found" });
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });

//updated on 26 may 24

//here is connection string of mongoDB server of swaraj's laptop : mongodb://localhost:27017/?directConnection=true

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB   mongodb://localhost:27017/emotrack 
// mongodb atlas : mongodb+srv://singhswaraj521:Ffj2wcsfgEk5UMQw@emotrack.yigesui.mongodb.net/?retryWrites=true&w=majority&appName=Emotrack

mongoose.connect('mongodb+srv://singhswaraj521:Ffj2wcsfgEk5UMQw@emotrack.yigesui.mongodb.net/?retryWrites=true&w=majority&appName=Emotrack', { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

// Import and use profile routes
const profileRoutes = require('./routes/routeProfile');
app.use('/api/profile', profileRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
