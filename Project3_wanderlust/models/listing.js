const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new schema({
    title : {
        type:String,
        required:true
    },
    description : String,
    image : {
        url: String,
        filename: String,
    },
    price : Number,
    location : String,
    country : String,
    reviews : [{
        type: mongoose.Schema.Types.ObjectId,//review object id in individual listing , inside array
        ref:"Review",//review model is reference
    },],
    owner: {
        type: schema.Types.ObjectId,
        ref: "User"
    }
});

//post mongoose middleware
listingSchema.post("findOneAndDelete", async (listing)=>{
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;