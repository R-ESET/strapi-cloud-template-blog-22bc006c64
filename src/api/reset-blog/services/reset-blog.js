'use strict';

/**
 * reset-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reset-blog.reset-blog');
