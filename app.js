const express = require("express")
const app = express()
const router = require('./routes/router')
const path = require("path")
const hbs = require('hbs')
require('./models/db/conn')
app.use(express.urlencoded({extended:false}))
app.use(express.json())


const viewPath = path.join(__dirname,"./views")
app.set("view engine", "hbs")
app.set("views", viewPath)
const partialsPath = path.join(__dirname,"./views/partials")
hbs.registerPartials(partialsPath)

app.use(router)

// app.use('/user',(userRoute))
// app.get("/",(req,res)=>{
//     res.render("login")
// })
app.listen(3000,()=>{
    console.log(`server is listening at port ${'http://localhost:3000'}`);
})