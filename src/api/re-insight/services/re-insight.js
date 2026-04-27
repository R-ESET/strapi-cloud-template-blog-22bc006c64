'use strict';

/**
 * re-insights service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::re-insight.re-insight');
