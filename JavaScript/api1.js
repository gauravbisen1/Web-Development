//fetch with promises

let url = "https://catfact.ninja/fact";
fetch(url)
    .then((res)=>{
        // console.log(res);
        // res.json().then((data)=>{
        //     console.log(data);
        // })
        return res.json();
    })
    .then((data)=>{
        console.log("data 1 -",data.fact);
        return fetch(url);
    })
    .then((res)=>{
        return res.json();
    })
    .then((data2)=>{
        console.log("data 2-",data2.fact);
        //.
        //.
    })
    //.
    //.
    .catch((err)=>{
        console.log("error-",err);
    })

    console.log("where?");