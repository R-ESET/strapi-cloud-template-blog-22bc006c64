'use strict';

/**
 * d-code service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::d-code.d-code');
