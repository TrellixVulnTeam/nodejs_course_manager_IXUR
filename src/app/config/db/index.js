const mongoose = require('mongoose');
// import mongoose from 'mongoose';
async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
      console.log('Conect Successfully')
    } catch (error) {
      console.log('Conect Failure')
        
    }
}

module.exports = {connect}