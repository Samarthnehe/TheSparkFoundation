const express   =require('express');
const mongoose   =require('mongoose');
const morgan  =require('morgan');
const path     =require('path');


const app=express();
const PORT=process.env.PORT||8080;

const routes=require('./routes/api');

const MONGODB_URI="mongodb+srv://samcuber:samcuber@cluster0.kgivc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true})


mongoose.connection.on('connected',()=>{
    console.log("Connectd");
})


app.use(express.json());
app.use(express.urlencoded({extended:false}));


 app.use(morgan('tiny'));
app.use('/api',routes);


app.listen(PORT,console.log("Server is running"));