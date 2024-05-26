module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/ingredients-usage',
      handler: 'ingredient-usage.getIngredientsUsage',
      config: {
        auth: false,
      },
    },
  ],
};
