'use strict';

/**
 * drs-insights service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::drs-insight.drs-insight');
