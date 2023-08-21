const express = require('express');
const path = require('path');
const port = 8080;
const app = express();
const expressLayouts = require('express-ejs-layouts');
const csv = require('csv-parser');

// Connect to MongoDB
const mongoose = require('mongoose');
const db = require('./config/mongoose');

const bodyParser = require('body-parser');

app.use(expressLayouts);

// Set the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// // Set up file upload middleware
// const upload = multer({ dest: 'upload/' });

// Setup JSON and URL encoded parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the static files from the assets folder
app.use(express.static('./assets'));


// Set up routes
app.use('/', require('./routes'));

// Start the server
app.listen(port, function (err) {
    if (err) {
        console.log('Error in running the server', err);
    }
    console.log(`Running the server on port: ${port}`);
});