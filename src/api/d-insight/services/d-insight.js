'use strict';

/**
 * d-insight service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::d-insight.d-insight');
