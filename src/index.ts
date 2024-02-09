import * as express from "express";

let app: express.Application = express();

app.listen(3000, () => {
  console.log("Server is running at port:3000");
});

const obj1 = { id : 1, name: 'manan'};
const obj2 = {...obj1, email: 'manan@hotmail.com', name : 'ali'};
console.log(obj1);
console.log(obj2);
