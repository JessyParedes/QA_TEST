describe('Login', () => {
  it('Deve fazer login com sucesso', () => {
    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/login.html');

    cy.get('#usuario').type('jessymuro.conecthus@gmail.com');
    cy.get('#senha').type('601062Jp!');

    // Tenta clicar na checkbox do captcha
    cy.get('iframe[src*="recaptcha"]').then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body).find('.recaptcha-checkbox-border').click();
    });

    cy.contains('Entrar').click();

    cy.contains('Email inválido').should('be.visible');
  });
});
