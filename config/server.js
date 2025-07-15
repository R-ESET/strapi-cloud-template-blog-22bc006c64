module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
     keys: env.array('APP_KEYS', ['qc4r540EpGIph6DFFBq8vN8ybLHLLxia', 'asuMxXyYx8TGam1cw2zZI8SWRBbdinkd']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
