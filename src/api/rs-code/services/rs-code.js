'use strict';

/**
 * rs-code service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rs-code.rs-code');
