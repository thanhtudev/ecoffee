import type { Schema, Attribute } from '@strapi/strapi';

export interface IngredientsQuantityIngredientsQuantity
  extends Schema.Component {
  collectionName: 'components_ingredients_quantity_ingredients_quantities';
  info: {
    displayName: 'Ingredients-Quantity';
    description: '';
  };
  attributes: {
    ingredient: Attribute.Relation<
      'ingredients-quantity.ingredients-quantity',
      'oneToOne',
      'api::ingredient.ingredient'
    >;
    quantity: Attribute.Float;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ingredients-quantity.ingredients-quantity': IngredientsQuantityIngredientsQuantity;
    }
  }
}
