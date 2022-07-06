const session = require("express-session");

let currentSession = 

    session({
        name: 'session-name-website',
        secret: 'session-secret-website',
        resave: false,
        saveUninitialized: false,
        cookie:{ 
            maxAge: 1000*60*60, //cookie lasts for an hour
            sameSite: true,
        }
    })

module.exports = currentSession;
