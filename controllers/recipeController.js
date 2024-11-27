const recipes = require('../models/recipeModel')

//getAllRecipes
exports.getAllRecipesController = async (req,res)=>{
    console.log("inside getAllRecipesController");
    
    try{
        const allRecipes = await recipes.find()
        res.status(200).json(allRecipes)
    }catch(err){
        res.status(401).json(err)
    }
}

//getARecipes
exports.getARecipeController = async (req,res)=>{
    console.log("inside getARecipeController");
    const {id} = req.params
    try{
        const viewRecipe = await recipes.findOne({_id:id})
        res.status(200).json(viewRecipe)
    }catch(err){
        res.status(401).json(err)
    }
}

//get related recipe
exports.getRelatedRecipeController = async(req,res)=>{
    console.log("Inside getRelatedRecipeController");
    const searchCuisine = req.query.cuisine
    const query= {
        cuisine :{
            $regex:searchCuisine,$options:"i"
        }
    }
    try{
        const allRelatedRecipes = await recipes.find(query)
        res.status(200).json(allRelatedRecipes)
    }catch(err){
        res.status(401).json(err)
    }
}

//addRecipe
exports.addRecipeController = async (req,res)=>{
    console.log("Inside addRecipeController");
    const {name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType} = req.body
    try{
        const existingRecipe = await recipes.findOne({name})
        if(existingRecipe){
            res.status(406).json("Recipe Already exist!!! Please Add Another...")
        }else{
            const newRecipe = new recipes({
                name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

//remove recipe
exports.removeRecipeController = async (req,res)=>{
    console.log("inside removeRecipeController");
    const {id} = req.params
    try{
        const removeItem = await recipes.findByIdAndDelete({_id:id})
        res.status(200).json(removeItem)
    }catch(err){
        res.status(401).json(err)
    }
}