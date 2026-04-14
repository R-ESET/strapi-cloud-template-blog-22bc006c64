'use strict';

/**
 * rsb-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rsb-status.rsb-status');
