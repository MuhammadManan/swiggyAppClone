import * as express from "express";
import * as mongoose from 'mongoose';
import { getEnvironmentVariables } from "./environments/environment";

let app: express.Application = express();

app.listen(3000, () => {
  console.log("Server is running at port:3000");
});

mongoose.connect(getEnvironmentVariables().db_uri).then(() =>{
  console.log('Connected to Mongodb');
});

app.use((req,res,next)=>{
  console.log('middleware1');
  next();
})

app.get("/api/user/login", (req, res, next) => {
  // console.log(req);
  console.log(req.query.email);
  res.status(200).send('success!');
});

app.get("/api/owner/login", (req, res) => {
  res.status(201).json({
    name: "Ali",
    age: 21,
    email: "ali@gmail.com",
    array: ['test'],
  });
});
