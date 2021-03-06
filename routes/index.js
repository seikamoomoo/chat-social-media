module.exports = function(app, sessionChecker, indexContext, User, Post, chatRooms, maxCons, defaultAuthedDest, defaultNonAuthedDest) {

    // // // // // // // // // // // // // // //
    // // //       EXPRESS ROUTES       // // //
    // // // // // // // // // // // // // // //

    // Index Route
    app.get('/', sessionChecker, function(req, res) {
        // Redirect to dashboard page (after sessionChecker)
        res.redirect(defaultAuthedDest);
    });

    // Signup Route Middleware
    require('./signup.js')(app, sessionChecker, indexContext, User);

    // Login Route Middleware
    require('./login.js')(app, sessionChecker, indexContext, User);

    // Chat Route Middleware
    require('./chat.js')(app, sessionChecker, indexContext, chatRooms, maxCons);

    // Search Route Middleware
    require('./search.js')(app, sessionChecker, indexContext);
  
    // Post Listing and Adding Middleware
    require('./posts.js')(app, sessionChecker, indexContext, User, Post);

    // Profile Page Middleware
    require('./profile.js')(app, sessionChecker, indexContext, User);

    // Logout Route Middleware
    require('./logout.js')(app);

    // 404 Route Middleware (MUST COME LAST)
    require('./404.js')(app, sessionChecker, indexContext);

};
