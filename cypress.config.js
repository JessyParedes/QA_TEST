const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://carlosfelixpenha-create.github.io/QAPlayground',

    specPattern: 'cypress/e2e/**/*.cy.js',

    setupNodeEvents(on, config) {
      on('after:run', (results) => {
        console.log('Testes finalizados!')
      })

      return config
    },
  },

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
})


