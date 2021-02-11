const Course = require('../models/Course')
const {multileMongooseToObj} = require('../../util/mongoose');
class MeController {

  //GET me/stored/courses
  storedCourses(reg,res,next){

      Promise.all([ Course.find({}), Course.countDocumentsDeleted({}) ])
        .then(([courses, deletedCount])=>{
          res.render('me/stored-courses',{
            courses:multileMongooseToObj(courses),
            deletedCount:deletedCount
          })
        })
        .catch(next)
   
  }

   //GET me/trash/courses
   trashCourses(reg,res,next){
    Course.findDeleted({})
      .then(courses=>{
        res.render('me/trash-courses',{courses:multileMongooseToObj(courses)})
      })
      .catch(next)
 
}
}
module.exports = new MeController; 