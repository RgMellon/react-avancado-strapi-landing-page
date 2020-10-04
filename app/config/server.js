module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "2d8fe7bf2a43b91bd7bfba21af9abb9e"),
    },
  },
});
