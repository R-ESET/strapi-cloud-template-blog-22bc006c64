'use strict';

/**
 * rs-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rs-status.rs-status');
