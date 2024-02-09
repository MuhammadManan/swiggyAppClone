import * as express from "express";

let app: express.Application = express();

app.listen(3000, () => {
  console.log("Server is running at port:3000");
});

function isMathsByXAvailable() {
  return true;
}

function isMathsByYAvailable() {
  return false;
}

function resultByMath() {
  return new Promise((resolve, reject) => {
    if (isMathsByXAvailable()) {
      // resolve("Maths by X available");
      resolve(true);
    } else if (isMathsByYAvailable()) {
      // resolve("Maths by Y available");
      resolve(true);
    } else {
      // reject("Both Math books are not available");
      reject(false);
    }
  });
}

function isSciByXAvailable() {
  return false;
}

function isSciByYAvailable() {
  return true;
}

function resultBySci(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (isSciByXAvailable()) {
      resolve("Sci by X available");
      //  resolve(true);
    } else if (isSciByYAvailable()) {
      resolve("Sci by Y available");
    } else {
      reject("Both Sci books are not available");
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

// async function final(){
//     try{
//         let result1 = await result();
//         return result1;
//     } catch(e){
//         return Promise.reject(e);
//     }
// }

async function final() {
  try {
    let result1 = await resultByMath(); 
    if (result1) result1 = await resultBySci();
    return result1;
  } catch (e) {
    return Promise.reject(e);
  }
}

final()
  .then((data) => {
    console.log("data :", data);
  })
  .catch((e) => {
    console.log("Error :", e);
  });
