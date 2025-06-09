const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema,reviewSchema} = require("./schema.js");

//user logged in or not
module.exports.isLoggedIn = (req,res,next)=>{
    //console.log(req );
    if (!req.isAuthenticated()) { 
        req.session.redirectUrl = req.originalUrl;
        req.flash("error" , "You must be logged in to create listing!");
        return res.redirect("/login");
    };
    next();
};

//middleware to send orignalUrl
module.exports.saveRedirectUrl = (req,res,next)=>{
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

//middleware to check owner
module.exports.isOwner = async (req,res,next) =>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if (!listing.owner.equals(res.locals.currUser._id)) {
        req.flash("error" , "You are not the owner of the listing!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

//function - validation for schema with JOI
module.exports.validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=> el.message).join(",");//if additional details comes it will seprated by comma then print
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
}; 

//function - validation for review with JOI
module.exports.validateReview = (req,res,next)=>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=> el.message).join(",");//if additional details comes it will seprated by comma then print
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
}; 



//middleware to check review owner
module.exports.isReviewAuthor = async (req,res,next) =>{
    let {id,reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if (!review.author.equals(res.locals.currUser._id)) {
        req.flash("error" , "You are not the author of the review!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};