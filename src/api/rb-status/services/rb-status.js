'use strict';

/**
 * rb-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rb-status.rb-status');
