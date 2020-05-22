const protect = require('static-auth');

// comma separated values of `${user}:${pass}`.
// see: `.env.sample`
const AUTH_USERS = process.env.AUTH_USERS

const app = protect(
  '/protected',
  (user, pass) =>
    user.trim() && pass.trim() && AUTH_USERS.includes(`${user}:${pass}`),
  { directory: __dirname + '/_static' }
);

module.exports = app;
