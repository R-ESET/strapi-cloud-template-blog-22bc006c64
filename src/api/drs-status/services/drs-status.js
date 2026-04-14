'use strict';

/**
 * drs-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::drs-status.drs-status');
