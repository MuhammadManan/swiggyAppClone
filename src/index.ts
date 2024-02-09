import * as express from "express";

let app: express.Application = express();

app.listen(3000, () => {
  console.log("Server is running at port:3000");
});

app.get('/api/user/login',(req,res)=>{
  // console.log(req);
  console.log(req.query.email);
  res.send('success!');
})

app.get('/api/owner/login',(req,res)=>{
  res.status(201).json({
    name:'Ali',
    age: 21,
    email: 'ali@gmail.com'
  });
})
 