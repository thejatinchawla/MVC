const express = require("express")
const app = express()
const router = require('./routes/router')
const path = require("path")
const hbs = require('hbs')
const session = require('express-session')

require('./models/db/conn')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30000 }
  }))

const viewPath = path.join(__dirname,"./views")
app.set("view engine", "hbs")
app.set("views", viewPath)
const partialsPath = path.join(__dirname,"./views/partials")
hbs.registerPartials(partialsPath)

app.use(router)

app.listen(3000,()=>{
    console.log(`server is listening at port ${'http://localhost:3000'}`);
})