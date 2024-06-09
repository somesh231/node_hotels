const Prompt = require("prompt-sync")();

//Q1
// function calculateCircleArea(){
//     let r = Prompt("Enter Radius : ")
//     let area = Math.PI * r**2
//     console.log(area)
// }

// calculateCircleArea()

//Q2

// function add(l1,l2){
//     return l1+l2
// }
// function Subtract(l1,l2){
//     return l1-l2
// }
// function Multiply(l1,l2){
//     return l1*l2
// }
// function Divison(l1,l2){
//     return l1/l2
// }



// function performOperation(l1,l2,callback){
//     return callback(l1,l2)
// }

// console.log(performOperation(1,2,add));

//Q3

// const fs = require("fs")
// fs.appendFile("notes.txt",'Hi',()=>{
//     console.log("filecreated");
// })

// fs.readFile("notes.txt",'utf-8',(err,data)=>{
//     if(err){
//         console.log("Error reading file:",err);
//         return;
//     }
//     console.log(data);
// })

//Q4

// const os =require('os')

// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.platform());
// console.log(os.cpus().length);

//Q5

const _ = require('lodash')

function sumofevens(numbers){
    const evenNumbers = _.filter(numbers,num=>num%2===0);
    return _.sumBy(evenNumbers)
}

const numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(sumofevens(numbers));

