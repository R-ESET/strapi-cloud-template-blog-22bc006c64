'use strict';

/**
 * d-privacy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::d-privacy.d-privacy');
