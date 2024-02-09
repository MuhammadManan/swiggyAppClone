import * as express from "express";

let app: express.Application = express();

app.listen(3000, () => {
  console.log("Server is running at port:3000");
});

function isMathsByXAvailable() {
  return false;
}

function isMathsByYAvailable() {
  return false;
}

function result(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (isMathsByXAvailable()) {
      resolve("Maths by X available");
    } else if (isMathsByYAvailable()) {
      resolve("Maths by Y available");
    } else {
      reject("Both books are not available");
    }
  });
}

// result()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     // console.log("hello");
//     console.log("Error:", error);
//   });

async function final(){
    try{
        let result1 = await result();
        return result1;
    } catch(e){
        return Promise.reject(e);
    }
}

final().then((data) =>{
    console.log('data :',data);
}).catch(e => {
    console.log('Error :',e);
})