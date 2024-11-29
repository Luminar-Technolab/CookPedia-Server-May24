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
//all-users
router.get('/all-users',jwtMiddleware,userController.getAllUsersController)
//all-downloads
router.get('/all-downloads',jwtMiddleware,downloadController.allDownloadsController)
//all-testimony
router.get('/all-testimony',testimonyController.getAllTestimonyController)
//testimony/id?status=Approved
router.get('/testimony/:id',jwtMiddleware,testimonyController.updateStatusTestimonyController)
//add-recipe
router.post('/add-recipe',jwtMiddleware,recipeController.addRecipeController)
//remove-recipe
router.delete('/recipe/:id/remove',jwtMiddleware,recipeController.removeRecipeController)
//update-recipe
router.put('/recipe/:id/edit',jwtMiddleware,recipeController.editRecipeController)
//update-user
router.put('/user/edit',jwtMiddleware,userController.editProfileController)

module.exports = router