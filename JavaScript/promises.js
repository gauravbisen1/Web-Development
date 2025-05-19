// function savetoDB(data){
//     return new Promise ((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if (internetSpeed>4) {
//             resolve("Sucsess: Data saved!")//result
//         }else{
//             reject("Failure: Weak connection!")//error
//         }
//     });
// };

// savetoDB("Gaurav")
// .then((result)=>{
//     console.log("data 1 was saved!");
//     console.log("result of promise:",result);
//     return savetoDB("Bisen");
// })
// .then((result)=>{
//     console.log("data 2 was saved!");
//     console.log("result of promise:",result);
//     return savetoDB("Hello");
// })
// .then((result)=>{
//     console.log("data 3 was saved!");
//     console.log("result of promise:",result);
// })
// .catch((error)=>{
//     console.log("promise was rejected");
//     console.log("error of promise:",error);
// });

//----------------------------------------------------------------------------------------------

//color change with promises
let h1 = document.querySelector("h1");

function changeColor(color , delay){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            h1.style.color=color;
            resolve("color changed!");
        }, delay);
    });
};

changeColor("red",1000)
    .then(()=>{
        console.log("red color was implemented!");
        return changeColor("green",1000);
    })
    .then(()=>{
        console.log("green color was implemented!");
        return changeColor("purple",1000);
    })
    .then(()=>{
        console.log("purple color was implemented!");
        return changeColor("yellow",1000);
    })
    .then(()=>{
        console.log("yellow color was implemented!");
        return changeColor("blue",1000);
    })
    .then(()=>{
        console.log("blue color was implemented!");
        //return changeColor("yellow",1000);
    })
    //catch not requred, if error comes its on html or css