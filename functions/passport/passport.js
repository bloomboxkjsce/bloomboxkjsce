const passport = require("passport");
// strategies
const facebook = require("passport-facebook");
const github = require("passport-github");
const google = require("passport-google-oauth20");
const local = require("passport-local");

const firebase = require("firebase");
const admin = require("firebase-admin");

const {
  developmentUrl,
  facebook: { clientID, clientSecret },
  github: { githubclientID, githubclientSecret },
  google: { googleId, googleSecret }
} = require("../configs/config");

// serialize the user for all
passport.serializeUser((user, done) => {
  // styff in cookie
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log("get data now in cookie");
  done(null, user);
});

// facebook
passport.use(
  new facebook(
    {
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: `/auth/facebook/callback`,
      profileFields: ["id", "displayName", "photos", "email"]
    },
    function(accessToken, refreshToken, profile, done) {
      console.log("facebook");
      return done(null, profile);
    }
  )
);

// github
passport.use(
  new github(
    {
      clientID: githubclientID,
      clientSecret: githubclientSecret,
      callbackURL: `/auth/github/callback`
    },
    function(accessToken, refreshToken, profile, done) {
      console.log("github");
      return done(null, profile);
    }
  )
);

// google
passport.use(
  new google(
    {
      clientID: googleId,
      clientSecret: googleSecret,
      callbackURL: `/auth/google/callback`,
      scope: ["profile"]
    },
    function(accessToken, refreshToken, profile, done) {
      console.log("google");
      // no need to validate
      return done(null, profile);
    }
  )
);

// local strat
passport.use(
  // error and user object
  new local(
    {
      usernameField: "email",
      passwordField: "password"
    },
    (email, password, done) => {
      firebase
        .firestore()
        .doc(`/Ennovate2k20/${email}`)
        .get()
        .then(data => {
          if (data.exists) {
            return done(null, { err: "loading file err" });
          } else {
            return done(null, { email, password });
          }
        });
    }
  )
);
