'use strict';

module.exports = {
  calculateIngredientsUsage: async (date) => {
    const sales = await strapi.entityService.findMany('api::sale.sale', {
      filters: { date },
      populate: {
        product: {
          populate: ['ingredient_quantity.ingredient']
        }
      }
    });

    let ingredientsUsage = {};

    for (let sale of sales) {
      if (!sale.product || !sale.product.ingredient_quantity) {
        continue;
      }

      const ingredientQuantities = sale.product.ingredient_quantity;

      for (let ingredientQuantity of ingredientQuantities) {
        if (!ingredientQuantity.ingredient || !ingredientQuantity.ingredient.id) {
          continue;
        }

        const ingredientId = ingredientQuantity.ingredient.id;
        const quantityUsed = ingredientQuantity.quantity * sale.quantity;

        if (!ingredientsUsage[ingredientId]) {
          ingredientsUsage[ingredientId] = {
            name: ingredientQuantity.ingredient.name,
            quantity: 0,
            unit: ingredientQuantity.ingredient.unit
          };
        }

        ingredientsUsage[ingredientId].quantity += quantityUsed;
      }
    }

    return ingredientsUsage;
  }
};
