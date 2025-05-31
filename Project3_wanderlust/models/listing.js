const mongoose = require("mongoose");
const schema = mongoose.Schema;

const listingSchema = new schema({
    title : {
        type:String,
        required:true
    },
    description : String,
    image : {
        type:String,
        default:"https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        set:(v)=> v===""?"https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2":v
    },
    price : Number,
    location : String,
    country : String
});

const Listing = mongoose.model("Listing",listingSchema);

module.exports = Listing;