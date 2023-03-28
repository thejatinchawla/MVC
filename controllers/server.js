const User = require('../models/user')
const Google = require('../models/google')
module.exports = {
    signUp : (req,res)=>{
        res.render('signup')
    },
    logIn : (req,res)=>{
        res.render('login')
    },
    dashboard : (req,res)=>{
        if(req.session.email){
            res.render('dashboard',{
                email : req.session.email,
                fullname : req.session.fullname
            })
        }
        // else{
        //     res.redirect("/login")
        // }
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
                    cpassword,
                    isAuthenticated : false
                })
                const dataSaved = await dataSave.save()
                req.session.email = req.body.email
                req.session.fullname = req.body.fullname
                // res.status(201).json({msg:"client account created successfully",dataSaved})
                res.redirect('/dashboard')
                console.log(dataSaved);
            }
            else {
                res.status(501).json({msg:"passwords are not matching"})
                res.send('Invalid details')
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
            console.log(userDetail);
            if (password == userDetail.password) {
                // res.json({msg:"login successfull"})
                req.session.email = req.body.email              
                res.redirect('/dashboard')
            } else {
                res.status(401).json({msg:"invalid Details"})
                res.send('invalid login details')
            }
        } catch (error) {
            console.log(error);
        }
    }),
    fetchData : (async(req,res)=>{
        try {
            const email = req.params.email
            const fetch = await Google.findOne({email})
            res.send(fetch)
        } catch (error) {
            console.log(error);
        }
    }),
    fetchUserData : (async(req,res)=>{
        try {
            const email = req.params.email
            const fetch = await User.findOne({email})
            res.send(fetch)
        } catch (error) {
            console.log(error);
        }
    }),
    fetch : (async(req,res)=>{
        try {
            const {given_name,family_name,email} = req.body
            // const encoded = await Google.findOne{{}}
            if(given_name && email && family_name){
                const dataSave = new Google({
                    given_name,
                    family_name,
                    email
                })
                const dataSaved = await dataSave.save()
                res.send(dataSaved)
            }
        } catch (error) {
            console.log(error);
        }
    }),
    auth : (async(req,res)=>{
        try {
            const email = req.params.email
            const updateAuth =await User.findOneAndUpdate({email},{$set:{isAuthenticated:true}},{new:true})
            res.send(updateAuth)
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    })

}