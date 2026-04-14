'use strict';

/**
 * drsb-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::drsb-status.drsb-status');
