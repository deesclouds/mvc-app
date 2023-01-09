# ToDo List App 
- has a MVC structure
organizer our server side code.

### What does MVC even mean?
(Model, View, Controller)

Model: Where our data is stored
View: Just shows us stuff
Controller: Where the brains are

Modular and Flexible and Abstraction

- brings a level or organization to our code that allows us to hand over different pieces

- more layers to who's making those requests, who hears those requests

- every single request needs to be heard by our router and sends it to the controller

# Homework
- watch Traversy Media video on MVC

- separation of concerns to keep our code base organized for ourselves and other developers



# Why 
2- Routes:
Home page Route & ToDos Route

Client- Side devices that makes requests to the server that has code written on it that listens to those requests then makes requests to our database 

Router: routes the different requests coming in to the controller.
It listens to the request and knows where to hand that request to. is gonna be the first thing that hears the request made by the client. Hears the URL.

Controller is in charge of the event listeners in the middle that knows what to do. 

Controller sometimes sends data to the View to help build out the HTML, responds back to the browser or sends data to the Model which.

The model talks to our Database.

Handle our views: Handlebars, Pug, React, Svelte 
Database: MongoDB, Sql, Postgress, Deta.sh, MariaDB, Firebase, Couchdb

If we follow MVC and separate our concerns it doesn't matter what we use to handle our views.
We can swap out whatever we want and our application still works.

Learn pug and then change the views.

### Benefits



### Technologies Used:
core and build out a bunch of projects and then make adjustments

ejs, views: react, database: postgress


## Getting Started
npm init -y

This creates our package.json file

Install these dependencies:
npm install express, mongoose dotenv ejs

- express
- mongoose
- dotenv
- ejs

npm install --save-dev nodemon

# Setup Database

Add Connection String from Database. 

This project is using Mongoose to talk to MongoDB.

Mongoose is an Object Data Modeling library for MongoDB and Node. 

This manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

Mongoose is not needed but it helps with the integrity of our data being passed into our database. 

## How to find your Connection String?
To get the connection string Cluster > Connect > Connect to Application > Copy Connection String

# Project Structure
config - holds our environment variables
css - stylesheets
js - javascript files
node_modules - 
controllers - 
models - 
views - 
routes - 
