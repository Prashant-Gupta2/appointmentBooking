const sequelize = require("../utils/dbConnection");
const User = require("../models/user");

const addUser = async(req,res) =>{
  try{
    console.log(req.params)
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

const deleteUser = async (req,res) => {
  try {
    const {id} = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await User.destroy({
      where: {
        id: id
      }
    });

    return res.status(200).json({ message: "User deleted successfully" });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};

const updateUser = async(req,res) =>{
  try{
   const {id} = req.params;
   const {user_name,phone_no,email} = req.body;
   const updated = await User.update({
    user_name,
    phone_no,
    email
   },
   {
    where:{id}
   }
  );
  if(updated[0] === 0){
    res.status(404).json({message:'user not found'})
  }
  res.status(200).json({message:'user updated'})
  }
  catch(err){
    console.error(err)
    res.status(500).json({Error:'failed to update user'})
  }
}

module.exports = {addUser,getUser,deleteUser,updateUser};