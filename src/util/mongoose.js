module.exports ={
    multileMongooseToObj: function(mongooseArr){
        return mongooseArr.map(item=>item.toObject())
    },
    singleMongooseToObj: function (mongoose) {
        return mongoose? mongoose.toObject(): mongoose;
    },
};