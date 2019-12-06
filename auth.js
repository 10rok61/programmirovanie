const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const users = {
    1: {
        name: 'admin',
        pass: 'admin'
    }
}

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'passwd',
    session: false
}, function(username, password, done) {
    const user = users[1];

    if (username === user.name && password === user.pass) {
        done(null, user);
    } else {
        done(new Error('bad credential'), null);
    }
}));