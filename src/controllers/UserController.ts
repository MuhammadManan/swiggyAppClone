import { Utils } from './../utils/Utils';
import { validationResult } from "express-validator";
import User from "../models/User";
export class UserController {

  static async signup(req, res, next) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const type = req.body.type;
    const status = req.body.status;
    const phone = req.body.phone;
    

    const data = {
      email,
      verification_token: Utils.generateVerificationToken(5),
      verification_token_time: Date.now() + new Utils().Max_Token_Time,
      phone,
      password,
      name,
      type,
      status,
    };
    try{
      let user =await new User(data).save();
      // send email to user for verification
      res.send(user);
    }
    catch(e){
      next(e);
    }
  }

  static async verify(req,res,next){
    const verification_token = req.body.verification_token;
    const email = req.body.email;
    try{
      const user = await User.findOneAndUpdate(
        {
          email:email, 
          verification_token: verification_token,
          verification_token_time: {$gt: Date.now()}
        },
        {
          email_verified: true
        },
        {
          new: true
        }
      );
      if(user){
        res.send(user);
      }else{
        throw new Error('Email verification Token is Expired. Please try again...');
      }
    } catch(e){
      next(e);
    }
  }

}
