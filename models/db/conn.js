const mongoose = require('mongoose')
mongoose.connect('******mongodb_url********')
.then(()=>{
    console.log(`DB connection is successful`)
})
.catch((e)=>{
    console.log(e)
})