// let todo =[];

// let req = prompt("Enter your request-");

// while(true){
//     if (req == "quit") {                //quit
//         console.log("Quitting app!");
//         break;
//     }
//     if(req == "list"){
//         console.log("-----------------------");
//         for (let i = 0; i < todo.length; i++) {
//             console.log(i,todo[i]);
//         }
//         console.log("-----------------------");
//     }else if(req == "add"){
//         let task = prompt("Enter task you want to add-");
//         todo.push(task);
//         console.log("task added!");
//     }else if(req == "delete"){
//         let idx = prompt("Enter task index to delete-");
//         todo.splice(idx,1);
//         console.log("task deleted!");
//     }else{
//         console.log("wrong request!");
//     }
//     req = prompt("Enter your request-");

// }
// <!-- ------------------------------------------------------------------------------------ -->

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function () {
    //create new li and store the input values inside li
   let item = document.createElement("li");
   item.innerText=inp.value; 

   //create new del button after new li and set text inside buttopn and add class delete
   let delBtn = document.createElement("button");
   delBtn.innerText="delete";
   delBtn.classList.add("delete");

   item.appendChild(delBtn);//to add delete button after li as child
   ul.appendChild(item);//to add li to child of ul
   inp.value="";//after submit clear the input value
});

//event delegation
ul.addEventListener("click", function(event){
    if (event.target.nodeName=="BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});