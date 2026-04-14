'use strict';

/**
 * drb-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::drb-status.drb-status');
