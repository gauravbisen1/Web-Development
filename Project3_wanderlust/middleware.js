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