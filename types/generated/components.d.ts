import type { Schema, Attribute } from '@strapi/strapi';

export interface IngredientIngredient extends Schema.Component {
  collectionName: 'components_ingredient_ingredients';
  info: {
    displayName: 'ingredient';
  };
  attributes: {
    name: Attribute.String;
    ingredient: Attribute.Relation<
      'ingredient.ingredient',
      'oneToOne',
      'api::ingredient.ingredient'
    >;
    quantity: Attribute.Float;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ingredient.ingredient': IngredientIngredient;
    }
  }
}
