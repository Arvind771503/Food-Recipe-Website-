const express = require('express')
const router = express.Router()
const foodRecipe = require('../models/FoodRecipes')

//to get all food list
router.get('/',(req, res)=>{
    
    foodRecipe.find({}, (err, result)=>{
        if(err){
            //console.log(err);
            res.send(err);
        }else{
            //console.log(result);
            res.send(result);
        }
    })
})

module.exports = router