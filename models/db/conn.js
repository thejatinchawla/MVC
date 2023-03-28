const mongoose = require('mongoose')
mongoose.connect('******mongo_url********')
.then(()=>{
    console.log(`DB connection is successful`)
})
.catch((e)=>{
    console.log(e)
})