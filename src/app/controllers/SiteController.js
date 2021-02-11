const Course = require('..//models/Course')
const {multileMongooseToObj} = require('../../util/mongoose')
class SiteController {

    index(reg, res, next) {
        
          Course.find({})
          .then(courses=> {
              
              res.render('home',{courses:multileMongooseToObj(courses)})
          })
          .catch(next)
    }

    search(reg, res) {
        res.render('search');
    }
   
}
module.exports = new SiteController; 