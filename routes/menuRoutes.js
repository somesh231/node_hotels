const express = require('express');
const router = express.Router();
const MenuItem = require('../models/Menu')

router.post('/',async (req,res)=>{
    try{

        const menudata = req.body;

        const newMenu = new MenuItem(menudata);

        const response = await newMenu.save()

        console.log('data saved');
        res.status(200).json(response)

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

router.get('/',async (req,res)=>{
    try{

        const menudata = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(menudata)


    }catch(err){
        console.log(err);
        res.status(500).json({err:'Internal server error'})

    }
})

router.get('/:taste',async (req,res)=>{
    try{
        const tasteType = req.params.taste;

        if(tasteType=='Sweet' || tasteType=='Spicy' || tasteType=='Sour'){
            const response = await MenuItem.findOne({taste:tasteType})
            console.log('data fetched');
            res.status(200).json(response)
        }else{
            res.status(404).json({error:'Invalid taste type'});
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'})
    }
})

//comment added
module.exports = router