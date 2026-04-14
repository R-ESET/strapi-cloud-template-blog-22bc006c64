'use strict';

/**
 * rb-status router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::rb-status.rb-status');
