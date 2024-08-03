const mongoose = require('mongoose')
const {mongoodb} = require('../secret')
 
const connectDB = async()=>{
    try {
         await mongoose.connect(
           mongoodb
         ); 
         console.log('conncetion to DB is succefully establish')
         mongoose.connection.on('error',(err)=>{
            console.log('DB connect error')
         })
    } catch (error) {
        console.log("could not connet",error.toString());
    }
}
module.exports = connectDB