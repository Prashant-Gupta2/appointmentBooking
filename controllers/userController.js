const sequelize = require("../utils/dbConnection");
const User = require("../models/user");

const addUser = async(req,res) =>{
  try{
   const {user_name,phone_no,email} = req.body;
   if(!user_name ||!phone_no || !email){
     return res.status(400).json({message:"All fileds are required"})
   }
 const newuser = await User.create({
     user_name,
     phone_no,
     email
  })
  res.status(201).json({
    message:"user added succesfully",
    data:newuser
  })
  }
  catch(err){
    console.error(err);
    res.status(500).json({Error:"error adding user"})      
  }
}

const getUser = async (req,res) =>{
 try{
  const user = await User.findAll();
  res.json(user);
 }
 catch(err){
  console.error(err);
  res.status(500).json({Error :" failed to fetch user"})
 }
}

module.exports = {addUser,getUser};