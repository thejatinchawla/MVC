const express = require("express")
const router = express.Router()
const {signUp, logIn, dashboard, postSignUp, postLogIn} = require("../controllers/server")

router.get('/',signUp)
router.get('/signup',signUp)
router.get('/login',logIn)
router.get('/dashboard',dashboard)
router.post('/signup',postSignUp)
router.post('/login',postLogIn)

module.exports = router