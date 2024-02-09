import * as express from "express";

let app: express.Application = express();

app.listen(3000, () => {
  console.log("Server is running at port:3000");
});

const obj1 = { id: 1, name: "manan" };
const obj2 = { email: "manan@hotmail.com", name: "ali" };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
// console.log(obj1);
// console.log(obj2);
// bd mei ana wala object(using spread operator) phely waly objects ki value update krdy ga
// but array mei aesa khuch ni hota 

const arr1 = [1,2,3];
const arr2 = [2,3,4];
const arr3 = [...arr1, ...arr2, {...obj3}];
console.log(arr3);