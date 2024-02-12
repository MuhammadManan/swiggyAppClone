import { validationResult } from "express-validator";
import User from "../models/User";

export class UserController {
  static signup(req, res, next) {
    const errors = validationResult(req);
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const type = req.body.type;
    const status = req.body.status;
    const phone = req.body.phone;
    if (!errors.isEmpty()) {
      // console.log("errors:", errors.array()[0].msg);
      return next(new Error(errors.array()[0].msg));
    }

    const data = {
      email,
      phone,
      password,
      name,
      type,
      status,
    };
    let user = new User(data);
    user
      .save()
      .then((user) => {
        res.send(user);
      })
      .catch((e) => {
        // console.log(e);
        next(e);
      });
  }
}
