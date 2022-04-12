const express = require('express')
const router = express.Router()
const signUpTemplateCopy =require('../schema/SignUpModels')
const bcrypt = require('bcrypt')

//router.post('/signup',(request,response)=>{
//  const signedUpUser=new signUpTemplateCopy({
//        collegename:request.body.collegename,
//        rollno:request.body.rollno,
//        email:request.body.email,
//        cultural:request.body.cultural,
//        sports:request.body.sports,
//        technicalevents:request.body.technicalevents
//    })
//    signedUpUser.save()
//    .then(data =>{
//        response.json(data)
//    })
//    .catch(error => {
//        response.json(error)
//    })
//    console.log(signedUpUser)
//})   
// router.post('/signup', async (req,res) => {
//     try{
//         const salt = await bcrypt.genSalt(5)
//         const clgname = await bcrypt.hash(req.body.collegename,salt)
//         const rno = await bcrypt.hash(req.body.rollno,salt)
//         const mail = await bcrypt.hash(req.body.email,salt)
//         const signedUpUser=new signUpTemplateCopy({
//             collegename:clgname,
//             rollno:rno,
//             email:mail,
//             cultural:request.body.cultural,
//             sports:request.body.sports,
//             technicalevents:request.body.technicalevents
//         })
//         signedUpUser.save()
//         console.log(signedUpUser)
//     }
//     catch{
//         res.send()
//     }
   
// })
router.post('/signup', async (req,res) => {
    const body = req.body;
    const user = new signUpTemplateCopy(body);
    const salt = await bcrypt.genSalt(10);
    user.collegename = await bcrypt.hash(user.collegename,salt);
    user.save().then((doc) => res.status(201).send(doc))
    console.log(user)
})

router.post('/login', async (req,res) => {
    const body = req.body;
    const user = await signUpTemplateCopy.findOne({email : body.email});
    if(user){
        const validateclgname = await bcrypt.compare(body.collegename,user.collegename);
        if(validateclgname){
            res.status(200).json({ message:"Valid College"});
        }
        else{
            res.status(400).json({message : "Invalid"});
        }
    }
    else{
        res.status(401).json({message : "User not exist"});
    }
})

module.exports= router
