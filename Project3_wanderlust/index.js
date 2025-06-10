//.env
if (process.env.Node_ENV != "production"){
    require("dotenv").config();
} 

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const { date } = require("joi");

// app.get("/",(req,res)=>{
//     res.send("Hii, I am root");
// });

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main(){
    await mongoose.connect(MONGO_URL);
};

main().then(()=>{
    console.log("connected to database");
}).catch(err=>{
    console.log(err);
});

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 *1000 ,
        maxAge: 7 * 24 * 60 * 60 *1000 ,
        httpOnly: true,
    }
};
//use session
app.use(session(sessionOptions));

//use flash
app.use(flash());

//to implement passport(use after session, because passport use session)
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate() ));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//middleware for flash (use before routes)
app.use((req,res,next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");//locals define
    res.locals.currUser = req.user;//user info sending to another ejs page as currUser
    next();//if not use we stuck here
})

//listing route
app.use("/listings", listingRouter);

//review route
app.use("/listings/:id/reviews", reviewRouter);

//user route
app.use("/", userRouter);

//for remain route which is not used
app.all("/*path",(req,res,next)=>{
    next(new ExpressError(404,"Page not found!"));
});

//middleware
app.use((err,req,res,next)=>{
    let{statusCode=500,message="500:Something went wrong!"} = err;
    //res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs",{err});
});

app.listen(8080,()=>{
    console.log("server is listening to port 8080");
});


//user demo
// app.get("/demouser", async (req,res) => {
//     let fakeUser = new User({
//         email: "gouravbisen123@gmail.com",
//         username: "Gaurav"
//     });
//     let registeredUser = await User.register(fakeUser, "helloworld");
//     res.send(registeredUser);
// });

//testing
// app.get("/testData", async (req,res)=>{
//     let sampleListing = new Listing({
//         title : "Testing Dtabase",
//         description : "data is enter or not in database!",
//         price : 1200,
//         location : "Hp ",
//         country : "india"
//     });
//     await sampleListing.save();
//     console.log("Sample data was saved!");
//     res.send("Successful testing");
// });