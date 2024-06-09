//day 1

//Q1
// const prompt = require("prompt-sync")()

// let age = prompt("What is your age?")

// if (age <18){
//     console.log("You get a 20% discount!")
// }else if (age >18 && age<=65){
//     console.log("Normal ticket Price Applies");
// }else{
//     console.log("You get a 30% senior discount");
// }

//Q2
// const prompt = require("prompt-sync")()
// let l = prompt("Enter length:")
// let w = prompt("Enter Width:")
// console.log("area of rectangle is : "+(l*w))

//Q3

// const A = {
//     name:"T-shirt",
//     price:1000,
//     inStock:true
// }

// const B = {
//     name:"Shirt",
//     price:2000,
//     inStock:false
// }

// const C = {
//     name:"Jeans",
//     price:1800,
//     inStock:true
// }

// console.log(A)

//Q4 

// const prompt = require("prompt-sync")()
// const GuestList = ["Somesh","Chaitanya","Anirudh","Aryan","Aman"]
// const userGuess = prompt("Enter name of guest : ")
// if (GuestList.includes(userGuess)){
//     console.log("Welcome to the party, "+userGuess+"!");
// }else{
//     console.log("Sorry, you're not on the guest list");
// }

//Q5 

const Wheather = {
    date:"01-06-2024",
    temprature:28,
    conditions:"Sunny",
    humidity:60
}

console.log("Wheather forecast for : ",Wheather.date);
console.log("Temprature : ",Wheather.temprature);
console.log("Conditions : ",Wheather.conditions);
console.log("Humidity : ",Wheather.humidity);
