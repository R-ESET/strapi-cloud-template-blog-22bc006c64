module.exports = ({ env }) => ({
  'users-permissions': {
    jwtSecret: env('JWT_SECRET', 'oeseKfu29KSiM6HeiY7angJlX+fGlQDfMgyPS9oBG7s='),
  },
});