const express = require('express')
const app = express();
const db = require('./db')

const mongoose = require('mongoose');


const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/',function (req,res){
    res.send('Welcome to my hotel How can I help you ?')
})



// app.get('/chicken',function (req,res){
//     res.send('Do you Want chicken sir? Okay Wait for 10 minutes')
// })

// app.get('/idli',function (req,res){
//     var customized_idli = {
//         name:'rava idli',
//         size: '10cm diameter',
//         is_sambhar : true,
//         is_chutney : false
//     }
//     res.send(customized_idli)
// })




//import router file

const personRoutes = require("./routes/personRoutes")

app.use('/person',personRoutes);

const menuRoutes = require("./routes/menuRoutes")

app.use('/menu',menuRoutes)


app.listen(3000,()=>{
    console.log("listen on the port 3000");
})

