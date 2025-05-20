//axios with fetch and async await

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