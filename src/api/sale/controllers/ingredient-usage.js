'use strict';

module.exports = {
  async getIngredientsUsage(ctx) {
    const { date } = ctx.query;
    const usage = await strapi.service('api::sale.ingredient-usage').calculateIngredientsUsage(date);
    ctx.body = usage;
  }
};
