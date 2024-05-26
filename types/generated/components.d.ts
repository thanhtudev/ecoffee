import type { Schema, Attribute } from '@strapi/strapi';

export interface IngredientQuantityIngredientsQuantity
  extends Schema.Component {
  collectionName: 'components_ingredients_quantity_ingredients_quantities';
  info: {
    displayName: 'Ingredient';
    description: '';
  };
  attributes: {
    ingredient: Attribute.Relation<
      'ingredient-quantity.ingredients-quantity',
      'oneToOne',
      'api::ingredient.ingredient'
    >;
    quantity: Attribute.Float;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ingredient-quantity.ingredients-quantity': IngredientQuantityIngredientsQuantity;
    }
  }
}
