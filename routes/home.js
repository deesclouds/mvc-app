// * Handles initial GET request for the homepage
// * Handles POST method request for adding a new item

const express = require('express')

// built in express router
const router = express.Router()

// controller for our home page that requires the file within our controller folder for our homepage
const homeController = require('../controllers/home')

// when someone visits the homepage, the homeController receives the index and displays the homepage
router.get('/', homeController.getIndex) //read route
router.post('/new', homeController.createItem) //create route

module.exports = router