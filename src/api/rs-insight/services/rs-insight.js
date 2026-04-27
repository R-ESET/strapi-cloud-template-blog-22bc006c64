'use strict';

/**
 * rs-insights service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rs-insight.rs-insight');
