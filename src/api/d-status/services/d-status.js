'use strict';

/**
 * d-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::d-status.d-status');
