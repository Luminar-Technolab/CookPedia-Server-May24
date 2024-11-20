const express = require('express')
const recipeController = require('../controllers/recipeController')
const testimonyController = require('../controllers/testimonyController')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const downloadController = require("../controllers/downloadController")
const saveRecipeController = require("../controllers/saveRecipeController")

const router = new express.Router()

//all-recipes
router.get('/all-recipes',recipeController.getAllRecipesController)
//add testimony
router.post('/add-testimony',testimonyController.addTestimonyController)
//register
router.post('/register',userController.registerController)
//login
router.post('/login',userController.loginController)
//view-recipe
router.get('/recipe/:id/view',jwtMiddleware,recipeController.getARecipeController)
//related-recipes
router.get('/related-recipes',jwtMiddleware,recipeController.getRelatedRecipeController)
//recipeId
router.post('/recipes/:recipeId/download',jwtMiddleware,downloadController.addRecipetoDownloadController)
//save recipe
router.post('/recipe/save',jwtMiddleware,saveRecipeController.addRecipeToSaveCollectionController)
//all-saved-recipes
router.get('/all-saved-recipes',jwtMiddleware,saveRecipeController.getUserSaveRecipeController)
//saved-recipe/id/remove
router.delete('/saved-recipe/:id/remove',jwtMiddleware,saveRecipeController.removeSaveRecipeController)

module.exports = router