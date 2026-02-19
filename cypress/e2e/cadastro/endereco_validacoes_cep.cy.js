describe('Validação do Campo CEP', () => {

  beforeEach(() => {
    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/formulario-1.html');

    // Preencher os outros campos obrigatórios para isolar o teste no campo CEP
    cy.get('#logradouro').clear().type('Rua das Flores');
    cy.get('#numero').clear().type('123');
    cy.get('#complemento').clear().type('Apartamento 101');
    cy.get('#bairro').clear().type('Centro');
    cy.get('#cidade').clear().type('São Paulo');
    cy.get('#estado').clear().type('SP');
  });

  it('Verificar se o campo CEP permite digitar apenas números (8 dígitos)', () => {
    cy.get('#cep').clear().type('01001000');
    cy.get('#cep').invoke('val').should('match', /^\d{5}-\d{3}$/); // Verifica máscara automática
  });

  it('Verificar se o campo CEP não permite ficar vazio', () => {
    cy.get('#cep').clear();
    cy.contains('Salvar').click();

    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Preencher corretamente o campo CEP, dúvida entrar em requisitos!');

    cy.get('.modal button').contains('OK').click();
  });

  it('Verificar se o campo CEP não aceita letras ou caracteres especiais', () => {
    cy.get('#cep').clear().type('ABC12@34');
    cy.contains('Salvar').click();

    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Preencher corretamente o campo CEP, dúvida entrar em requisitos!');

    cy.get('.modal button').contains('OK').click();
  });

  it('Verificar se o campo CEP aplica máscara automática no formato 00000-000 durante a digitação', () => {
    cy.get('#cep').clear().type('01001000');
    cy.get('#cep').invoke('val').should('eq', '01001-000'); // Verifica máscara automática
  });

  it('Verificar se ao preencher incorretamente o campo CEP é exibida a mensagem de erro em modal', () => {
    cy.get('#cep').clear().type('1234'); // CEP inválido (menos de 8 dígitos)
    cy.contains('Salvar').click();

    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Preencher corretamente o campo CEP, dúvida entrar em requisitos!');

    cy.get('.modal button').contains('OK').click();
  });

});
