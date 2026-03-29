describe('Login', () => {
  it('Deve fazer login com sucesso', () => {
    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/login.html');

    cy.get('#usuario').type('jessymuro.conecthus@gmail.com');
    cy.get('#senha').type('601062Jp!');

    // Captcha simples
    cy.get('#captcha').click();

    cy.get('#btnEntrar').click();

    cy.get('body').then(($body) => {
      if ($body.find('#modalOkErro').length > 0) {
        cy.get('#modalOkErro').click();
      }
    });
  });
});