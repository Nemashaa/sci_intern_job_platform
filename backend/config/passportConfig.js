const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
require('dotenv').config();
const { Users } = require('../models');


const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
  try {
    const user = await Users.findByPk(jwt_payload.id);
    if (user) {
      return done(null, { id: user.id, email: user.email, role: user.userGroup });
    } else {
      return done(null, false);
    }
  } catch (error) {
    console.error('Error in passport strategy:', error);
    return done(error, false);
  }
}));

// passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//   console.log(`1`);
//   User.findOne({ where: { email } });
//   User.findOne({id: jwt_payload.id}, function(err, user) {
//     console.log(`2`);
//       if (err) {
//         console.log(`3`);
//           return done(err, false);
//       }
//       if (user) {
//         console.log(`4`);
//           return done(null, user);
//       } else {
//         console.log(`5`);
//           return done(null, false);
//           // or you could create a new account
//       }
//   });
// }));
// module.exports = function (passport) {
//   passport.use(new Strategy(opts, async (jwt_payload, done) => {
//     try {
//       const user = await User.findByPk(jwt_payload.id);
//       if (user) {
//         return done(null, user);
//       }
//       return done(null, false);
//     } catch (error) {
//       console.error(error);
//       return done(error, false);
//     }
//   }));
// };
