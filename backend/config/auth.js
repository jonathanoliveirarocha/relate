const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../models/User");

module.exports = (passport) => {
  passport.use(
    new localStrategy(
      { usernameField: "email", passwordField: "password" },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email: email });
          if (!user) {
            return done(null, false, { message: "Esta conta não existe!" });
          } else {
            bcrypt.compare(password, user.password, (err, logged) => {
              if (logged) {
                if (user.admin == 1) {
                  return done(null, user);
                } else {
                  return done(null, false, {
                    message: "Você não é um administador do site!",
                  });
                }
              } else {
                return done(null, false, { message: "Senha incorreta!" });
              }
            });
          }
        } catch {
          return done(err);
        }
      }
    )
  );
};

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});
