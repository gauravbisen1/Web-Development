const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
    .then(()=>{
        console.log("Connection successful!");
    })
    .catch((err)=>console.log(err));



let allchats = [
    {
        from: "gaurav",
        to: "lucky",
        msg: "when you reach?",
        created_at: new Date()
    },
    {
        from: "arun",
        to: "abhay",
        msg: "Hello whatsap?",
        created_at: new Date()
    },
    {
        from: "devansh",
        to: "aayush",
        msg: "kaise ho bhai?",
        created_at: new Date()
    },
    {
        from: "anurag",
        to: "chirag",
        msg: "sab badhiya?",
        created_at: new Date()
    },
    {
        from: "anish",
        to: "aditya",
        msg: "kab tak phuvhrha?",
        created_at: new Date()
    },
    {
        from: "anil",
        to: "sunil",
        msg: "barrish horh hai...",
        created_at: new Date()
    },
    {
        from: "ramesh",
        to: "mohan",
        msg: "kal kitne bje jana hau?",
        created_at: new Date()
    },
    {
        from: "ram",
        to: "laxman",
        msg: "||Hanuman kha hai laxman||",
        created_at: new Date()
    }
];

Chat.insertMany(allchats);



// let chat1 = new Chat({
//     from: "gaurav",
//     to: "bisen",
//     msg: "Hello How Are You?",
//     created_at: new Date()
// });
// chat1.save().then((res)=>{
//     console.log(res)
// });



