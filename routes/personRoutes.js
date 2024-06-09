const express = require('express');
const router = express.Router();
const Person = require('../models/person');
const person = require('../models/person');

router.post('/',async (req,res)=>{
    try{

        const data = req.body  //Assuming the request body contains the person data

        // create a new Person document using mongoose model

        const newPerson=new Person(data);


        // Save the new person to the database
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});

    }
})



router.get('/',async (req,res)=>{
    try{
        const data = await Person.find()
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'}); 
    }
})

router.get('/:workType',async (req,res)=>{
    try{

        const workType = req.params.workType;

        if(workType=="chef" || workType=="waiter" || workType=="manager"){
            const response = await person.find({work:workType});
            console.log('data fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:'Invalid work type'})
        }

    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }
})

router.put('/:id',async (req,res)=>{
    try{

        const personId = req.params.id;  // Extract the id from URL parameter


        const updatedPersonData = req.body; // Updated data for the person


        const response = await person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true, // return the updated document
            runValidators:true // run mongoose validation
        })

        if(!updatedPersonData){
            return res.status(404).json({error:'Invalid Person'})
        }

        console.log("data updated");

        res.status(200).json(response);

    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})

    }
})

router.delete('/:id',async (req,res)=>{
    try{

        const deleteid = req.body;

        const response = await person.findByIdAndDelete(deleteid);

        if(!response){
            res.status(404).json({error:"Person not found"})
        }

        console.log('data delete');
        res.status(200).json({message:"Person deleted sucessfully"})

    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})        

    }
})



module.exports = router;