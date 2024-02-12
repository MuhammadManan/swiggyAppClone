import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserValidators } from "../validators/UserValidators";

export class UserRouter{
    public router: Router;

    constructor(){
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }

    getRoutes(){}
    
    postRoutes(){
        this.router.post("/signup", UserValidators.signup(), UserController.signup);
    }
    putRoutes(){}
    patchRoutes(){}
    deleteRoutes(){}
}

export default new UserRouter().router;