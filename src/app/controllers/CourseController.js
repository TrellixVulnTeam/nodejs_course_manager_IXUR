const Course = require('../models/Course')
const {singleMongooseToObj} = require('../../util/mongoose');
class CourseController {

    // GET /courses/:slug
    show(reg, res, next) {
        Course.findOne({slug: reg.params.slug})
        .then(course=>{
        console.log(course);
            res.render('course/show',{course: singleMongooseToObj(course)})
        })
        .catch(next);
        
    }
    create(reg,res,next){
        res.render('course/create');
    }
    store(reg,res,next){  
        const course = new Course(reg.body);
        course.save()
            .then(()=> res.redirect('/'))
            .catch(next)
    }
    edit(reg,res,next){
        Course.findById(reg.params.id)
            .then(course => res.render('course/edit',{course: singleMongooseToObj(course)}))
            .catch(next)
    }
    //PUT
    update(reg,res,next){
        Course.updateOne({_id: reg.params.id}, reg.body)
            .then(()=> res.redirect('/me/stored/courses'))
            .catch(next)

    }
    // DELETE SOFT
    deleteSoft(reg,res,next){
        Course.delete({_id:reg.params.id})
            .then(()=> res.redirect('/me/stored/courses'))
            .catch(next)    

    }
    // DELETE
    delete(reg,res,next){
        Course.deleteOne({_id:reg.params.id})
            .then(()=> res.redirect('back'))
            .catch(next)    

    }
    // PATCH restore
    restore(reg,res,next){
        Course.restore({_id: reg.params.id})
            .then(()=> res.redirect('back'))
            .catch(next)

    }
}
module.exports = new CourseController; 