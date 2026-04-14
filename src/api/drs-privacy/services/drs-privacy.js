'use strict';

/**
 * drs-privacy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::drs-privacy.drs-privacy');
