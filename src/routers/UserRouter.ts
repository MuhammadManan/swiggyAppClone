import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserValidators } from "../validators/UserValidators";
import { GlobalMiddleWare } from "../middlewares/GlobalMIddleWare";

export class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.getRoutes();
    this.postRoutes();
    this.patchRoutes();
    this.putRoutes();
    this.deleteRoutes();
  }

  getRoutes() {}
  putRoutes() {}

  postRoutes() {
    this.router.post(
      "/signup",
      UserValidators.signup(),
      GlobalMiddleWare.checkError,
      UserController.signup
    );
  }
  patchRoutes() {
    this.router.patch(
      "/verify",
      UserValidators.verifyUserEmail(),
      GlobalMiddleWare.checkError,
      UserController.verify
    );
  }
  deleteRoutes() {}
}

export default new UserRouter().router;
