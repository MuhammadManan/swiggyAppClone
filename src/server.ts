import * as bodyParser from "body-parser";
import * as express from "express";
import * as mongoose from "mongoose";
import { getEnvironmentVariables } from "./environments/environment";
import UserRouter from "./routers/UserRouter";
// import {UserRouter} from "./routers/UserRouter";

// let routes = new UserRouter().router;
export class Server {
  public app: express.Application = express();

  constructor() {
    this.setConfigs();
    this.setRoutes();
    this.error404Handler();
    this.handlerErrors();
  }

  setConfigs() {
    this.connectMongoDB();
    this.configureBodyParser();
  }

  connectMongoDB() {
    mongoose.connect(getEnvironmentVariables().db_uri).then(() => {
      console.log("Connected to Mongodb");
    });
  }

  configureBodyParser(){
    this.app.use(bodyParser.urlencoded({
        extended: true,
    }));
  }


  setRoutes(){
    this.app.use('/api/user', UserRouter);
  }

  error404Handler(){
    this.app.use((req,res)=>{
        res.status(404).json({
            message: 'Not found',
            status_code: 404,
        })
    })
  }

  handlerErrors(){
    this.app.use((error,req, res, next) => {
      // console.log('handler:',error.message);
        const errorStatus = req.errorStatus || 500;
        res.status(errorStatus).json({
            message: error.message || 'Something went wrong. Please try again!',
            status_code: errorStatus,
        });
    })
  }
}
