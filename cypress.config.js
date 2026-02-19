const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // Aqui você adiciona o reporter
      // Não altera os testes em si
      on('after:run', (results) => {
        console.log('Testes finalizados!');
      });

      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
  },

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  }
});


