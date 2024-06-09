// const json = {
//     "name":"Alice",
//     "age":25,
//     "hobbies":["reading","painting"]
// };

// const age = json.age;

// const jsonString = JSON.stringify(json)

// console.log(jsonString);

// const express = require('express')

// const app = express();

// app.get("/",(req,res)=>{
//     res.send("Hello,world!")
// })

// app.listen(3000,()=>{
//     console.log("listen on port 3000");
// })



// const jsonString =  '{"product": "Laptop", "price": 999.99}'

// const jsonObj = JSON.parse(jsonString)

// console.log(jsonObj)

const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    const wheather = {
        currtemp : 30,
        conditions: "Sunny",
        city: "Bikaner"
    }
    res.json(wheather)
})

app.listen(3000,()=>{
    console.log("listen on port 3000");
})
