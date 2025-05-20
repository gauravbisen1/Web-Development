//axios with fetch and async await for html for random cat fact

let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click",async()=>{
    let link = await getImages();

    let img = document.querySelector("#result");
    img.setAttribute("src",link);
    console.log(link);
})



async function getImages(){
    try{
        let res = await axios.get(url);
        return res.data.message;
    }catch(e){
        console.log("error-",e);
        return "/";
    }
    console.log("where?");
}





