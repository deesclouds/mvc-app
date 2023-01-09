// Step 1
// todo - Declare Variables
const express = require('express');
const app = express();
const PORT = 8000
const mongoose = require('mongoose')


// *Import functions/routes
const connectDB = require('./config/database.js')
const homeRoutes = require('./routes/home.js')
require('dotenv').config({path: './config/.env'})
// Step 4
// todo - Connect to Database
// calls our database immediately
connectDB()

// Step 2
// todo - Set Middleware
app.set("view engine", "ejs")
// allows express to use our public folder for static files
app.set(express.static("public"))
// Allows us to parse requests from forms properly and extract it from the url to make use of the data
app.use(express.urlencoded({extended: true}))

// Step 5
// todo - Set Routes
app.use('/', homeRoutes)

// Step 3
// todo - Start Server
// Set up express to listen to our port and show a message to let us know that our server is running and working properly
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))