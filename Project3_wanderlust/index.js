const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema,reviewSchema} = require("./schema.js");
const Review = require("./models/review.js");


app.get("/",(req,res)=>{
    res.send("Hii, I am root");
});

//function - validation for schema with JOI
const  validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=> el.message).join(",");//if additional details comes it will seprated by comma then print
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
}; 

//function - validation for review with JOI
const  validateReview = (req,res,next)=>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=> el.message).join(",");//if additional details comes it will seprated by comma then print
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
}; 

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

//index route
app.get("/listings",wrapAsync( async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
}));

//new route
app.get("/listings/new", (req,res)=>{
    res.render("listings/new.ejs");
});

//show route
app.get("/listings/:id", wrapAsync( async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs",{listing});
}));

//create route
app.post("/listings",validateListing, wrapAsync( async(req,res,next)=>{
    // if(!req.body.listing){
    //     throw new ExpressError(400, "Send valid data for listing");
    // }
   
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
}));

//edit route
app.get("/listings/:id/edit",wrapAsync( async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));

//update route
app.put("/listings/:id",validateListing,wrapAsync( async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id , {...req.body.listing});
    res.redirect(`/listings/${id}`);
}));

//delete route
app.delete("/listings/:id",wrapAsync( async (req,res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));

//reviews-

//post route (reviews)
app.post("/listings/:id/reviews", validateReview, wrapAsync (async(req,res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    // console.log("new review saved!");
    // res.send("new review saved!");

    res.redirect(`/listings/${listing._id}`);
}));

//delete route (reviews)
app.delete("/listings/:id/reviews/:reviewId", wrapAsync(async (req,res) =>{
    let { id,reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}))




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