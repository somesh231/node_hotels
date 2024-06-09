const mongoose = require('mongoose');

//define the mongodb connection url
const mongoUrl = 'mongodb://localhost:27017/'; //replace my database with your database name

//connect mongoose to mongourl

mongoose.connect(mongoUrl);

// get the default connection
// mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb');
})

db.on('disconnected',()=>{
    console.log('disconnected with mongodb server');
})

db.on('error',(err)=>{
    console.log('Mongodb connection error',err);
})

//export the databse connection
module.exports=db

