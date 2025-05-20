//axios with fetch and async await for html for random cat fact

let url = "https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        return "no fact found";
    }
    console.log("where?");
}

let btn = document.querySelector("button");

btn.addEventListener("click",async()=>{
    let fact = await getFacts();
    console.log(fact);

    let p = document.querySelector("#result");
    p.innerText=fact;

})