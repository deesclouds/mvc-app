const mongoose = require('mongoose')

// using an async function to wait for a response
const connectDB = async () => {
    // try something
    try {
        const conn = await mongoose.connect(process.env.DB_CONNECTION)
        // displays the connection session in the console
        console.log(`MongoDB is connected: ${conn.connection.host}`)
    //  if something goes wrong catch the error and display it
    } catch (err){
        // console.logs the error then exits the function
        console.log(err)
        process.exit(1)
    }
}
// exporting a reference to our database 
module.exports = connectDB