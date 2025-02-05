const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com', // Define a URL base para evitar repetição no código
    setupNodeEvents(on, config) {
      
    },
  },
});
