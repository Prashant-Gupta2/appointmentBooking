const express = require('express');
const sequelize = require("./utils/dbConnection");
const cors = require('cors');
const userRoute = require("./routes/userRoute");
 require("./models/user")

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use("/",userRoute);

sequelize.sync()
.then(()=>{
 app.listen(3000,()=>{
  console.log("Server is runnig at 3000");
})
}).catch(err=>{
 console.log(err)
})

