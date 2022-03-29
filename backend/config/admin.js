module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ef4ccb6bf3d65d878f294d811cc0fedf'),
  },
});
