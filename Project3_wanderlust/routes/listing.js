const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn , isOwner , validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer= require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });


//index route
router.get("/",wrapAsync( listingController.index ));//listingController->index

//new route
router.get("/new", isLoggedIn , listingController.renderNewForm);

//show route
router.get("/:id", wrapAsync( listingController.showListing ));

//create route
router.post("/",isLoggedIn , upload.single("listing[image]") ,validateListing, wrapAsync(listingController.createListing));


//edit route
router.get("/:id/edit",isLoggedIn ,isOwner ,wrapAsync( listingController.renderEditForm ));

//update route
router.put("/:id", isLoggedIn, isOwner ,upload.single("listing[image]") ,validateListing,wrapAsync( listingController.updateListing ));

//delete route
router.delete("/:id",isLoggedIn ,isOwner ,wrapAsync( listingController.destroyListing ));

module.exports = router;

// ----------------------------or-------------------------------


// this will also be use-----------------------------------------------------------

//index and create route has same route to refactor it we use router.router

// router.route("/")
// .get(wrapAsync( listingController.index )) //index route
// .post(isLoggedIn ,validateListing, wrapAsync //create route(listingController.createListing));

// //new route
// router.get("/new", isLoggedIn , listingController.renderNewForm);

//show, update and delete also have same route 

// router.route("/:id")
// .get( wrapAsync( listingController.showListing ))//show route
// .put( isLoggedIn, isOwner ,validateListing,wrapAsync( listingController.updateListing ))//update route
// router.delete("/:id",isLoggedIn ,isOwner ,wrapAsync( listingController.destroyListing ));//delete route
