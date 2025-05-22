const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();

// Set up EJS as the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use the index router
app.use('/', indexRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

