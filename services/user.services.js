const bcrypt = require('bcrypt');
const {user} = require('../models');
const jsonwebtoken = require('jsonwebtoken');

require('dotenv').config();

exports.Signup = async(req, res) => {
    const {username, email, password} = req.body;
    console.log(username, email, password);
    
    try{
      const userExists = await user.findOne({
        where: {
          email
        } 
      });

      console.log('oke')
    
        if(userExists){
            return {
                status: 400,
                message: "email sudah terdaftar"
            }
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
        const data = await user.create({username,email,password: hashedPassword});
    
        return { 
            status: 201, 
            data: req.body,
            message: 'berhasil mendaftarkan akun'
         };
    }catch (error){
        console.error(error);
        return {
            status: 500,
            message: "Internal server error",
        };
    }
}

exports.Login = async (req) => {
    const {username, password} = req.body;
    console.log(username, password);

      const dataUser = await user.findOne({
        where: {
          username
        } 
      });
  
      if (!dataUser) {
        return {
          status: 403,
          message: "Username not found",
        };
      }
  
      const cekPass = await bcrypt.compare(password, dataUser.password);
  
      if (!cekPass) {
        return {
          status: 403,
          message: "Incorrect password",
        };
      }
  
      const token = jsonwebtoken.sign({
        idUser: dataUser.idUser,
        username: dataUser.username,
        email: dataUser.email,
      }, process.env.JWT, {
        expiresIn: '24h'
      });
  
      return {
        status: 201,
        message: "Login successful",
        data: {
          token,
        },
      };
  }; 