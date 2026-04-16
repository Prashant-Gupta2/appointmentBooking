const { DataTypes } = require("sequelize");
const sequelize = require("../utils/dbConnection");

const User = sequelize.define("User", {
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  phone_no: {
    type: DataTypes.STRING,
    allowNull: true
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

module.exports = User;