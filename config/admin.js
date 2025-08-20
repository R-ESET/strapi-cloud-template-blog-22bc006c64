module.exports = ({ env }) => ({
  auth: {
    secret: env('JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'gSFcCx6/xVk6AqxKvBVqXw=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', "JJdCtEHn5FsQl+vox2b4MMDNzyAzeGiv7dGTtUlSn9U="),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
