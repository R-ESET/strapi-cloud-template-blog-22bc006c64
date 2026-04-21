'use strict';

/**
 * re-insight service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::re-insight.re-insight');
