module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '96115121a9b22a7b949f8a233a3de3bb'),
    },
  },
  url: env('URL', 'http://localhost:1337'),
});
