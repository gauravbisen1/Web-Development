const mongoose = require("mongoose");
const{Schema} = mongoose;

main()
    .then(()=>{
        console.log("connection success!");
    })
    .catch((err)=> console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
};

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    //which user post this will store
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);

const addData = async () =>{

    //TOO SAVE USER1 AND POST 1
    // let user1 = new User({
    //     username: "Gaurav Bisen",
    //     email: "gauravbisen@gmail.com"
    // });
    // let post1 = new Post({
    //     content: "Hello World",
    //     likes: 7
    // });

    // post1.user = user1;

    // await user1.save();
    // await post1.save();

    //TOO SAVE USER1, POST2
    let user = await User.findOne({username: "Gaurav Bisen"});

    let post2 = new Post({
        content: "Bye Bye",
        likes: 23
    });

    post2.user = user;
    await post2.save();
};

addData();


//to print all data
const getData = async ()=> {
    let result = await Post.find({}).populate("user");
    console.log(result);
};
getData();