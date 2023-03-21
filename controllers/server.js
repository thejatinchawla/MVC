const User = require('../models/user')

module.exports = {
    signUp : (req,res)=>{
        res.render('signup')
    },
    logIn : (req,res)=>{
        res.render('login')
    },
    dashboard : (req,res)=>{
        res.render('dashboard')
    },
    postSignUp : (async(req,res)=>{
        try {
            const password = req.body.password
            const cpassword = req.body.cpassword
            if (password == cpassword) {
                const dataSave = new User({
                    fullname : req.body.fullname,
                    email : req.body.email,
                    password,
                    cpassword
                })
                const dataSaved = await dataSave.save()
                res.status(201).json({msg:"client account created successfully",dataSaved})
                console.log(dataSaved);
            }
            else {
                res.status(501).json({msg:"passwords are not matching"})
            }
        } catch (error) {
            console.log(error)
        }
    }),
    postLogIn : (async(req,res)=>{
        try {
            const email = req.body.email
            const password = req.body.password
            const userDetail = await User.findOne({email})
            if (password == userDetail.password) {
                res.json({msg:"login successfull"})
            } else {
                res.status(401).json({msg:"invalid Details"})
            }
        } catch (error) {
            console.log(error);
        }
    })

}