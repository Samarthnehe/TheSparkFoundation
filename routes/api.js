const express=require('express');
const User=require('../models/User');
const router=express.Router();

router.get('/user',(req,res)=>{
   

    User.find({}).then((data)=>{
        // console.log(data);
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    })
    
});

router.post('/send',(req,res)=>{
    console.log(req.body.id)
    User.findById(req.body.id,(err,foundUser)=>{
        if(err){
            console.log(err);
        }
        else{
            foundUser.balance=foundUser.balance + parseInt(req.body.amount);
            User.findByIdAndUpdate(req.body.id,foundUser,(err,result)=>{
                if(err){
                    res.send(err);
                }
                else{
                    // console.log(result);
                    res.send(result);
                }
            })
        }
    })
    
})

router.post('/sendPay',(req,res)=>{
    User.findById(req.body.id,(err,foundUser)=>{
        if(err){
            console.log(err);
        }
        else{
            foundUser.balance=foundUser.balance - req.body.amount;
            User.findByIdAndUpdate(req.body.id,foundUser,(err,result)=>{
                if(err){
                    res.send(err);
                }
                else{
                    // console.log(result);
                    res.send(result);
                }
            })
        }
    })
    
})

router.get('/name',(req,res)=>{
    const data={
        username:"Peter",
        age:5
    };
    res.json(data);
});

module.exports=router;