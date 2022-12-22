const mongoose = require('mongoose')

const URL = "mongodb+srv://omkhot:<omkhot>@cluster0.smqxlzd.mongodb.net/?retryWrites=true"

const connectDatabase =() =>{
    mongoose.connect(URL ,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(con =>{
        console.log('MongoDb connected')
    })
}

module.exports = connectDatabase