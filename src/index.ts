import * as express from "express";

let app: express.Application = express();

app.listen(3000, () => {
  console.log("Server is running at port:3000");
});

app.use((req,res,next)=>{
  console.log('middleware1');
  next();
})

app.get("/api/user/login", (req, res, next) => {
  // console.log(req);
  console.log(req.query.email);
  next();
}, (req, res, next) =>{
  console.log('middleware2');
  res.send("success!");
  // next();
});

app.get("/api/owner/login", (req, res) => {
  res.status(201).json({
    name: "Ali",
    age: 21,
    email: "ali@gmail.com",
    array: ['test'],
  });
});
