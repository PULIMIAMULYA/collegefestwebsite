const express = require('express')
const router = express.Router()
const signUpTemplateCopy =require('../models/SignUpModels')

router.post('/signup',(request,response)=>{
    const signedUpUser=new signUpTemplateCopy({
        collegename:request.body.collegename,
        rollno:request.body.rollno,
        email:request.body.email,
        cultural:request.body.cultural,
        sports:request.body.sports,
        technicalevents:request.body.technicalevents
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
    
})   

module.exports= router
