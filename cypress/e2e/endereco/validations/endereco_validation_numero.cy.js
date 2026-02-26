describe('Validação do Campo Número', () => {
  beforeEach(() => {
    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/formulario-1.html');
    
    // Preenche os outros campos obrigatórios corretamente para isolar o erro no campo Número
    cy.get('#logradouro').clear().type('Rua das Flores');
    cy.get('#bairro').clear().type('Centro');
    cy.get('#cidade').clear().type('São Paulo');
    cy.get('#estado').clear().type('SP');
    cy.get('#cep').clear().type('01001000');
  });

  it('Verificar se o campo Número permite digitar apenas números', () => {
    cy.get('#numero').clear().type('12345');
    cy.contains('Salvar').click();

    // Verifica que não aparece mensagem de erro do campo Número
    cy.get('.modal').should('not.exist');
  });

  it('Verificar se o campo Número não permite ficar vazio', () => {
    cy.get('#numero').clear();
    cy.contains('Salvar').click();

    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Preencher corretamente o campo Número, dúvida entrar em requisitos!');

    cy.get('.modal button').contains('OK').click();
  });

  it('Verificar se o campo Número não aceita letras ou caracteres especiais', () => {
    cy.get('#numero').clear().type('abc@#');
    cy.contains('Salvar').click();

    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Preencher corretamente o campo Número, dúvida entrar em requisitos!');

    cy.get('.modal button').contains('OK').click();
  });

  it('Verificar se ao preencher incorretamente o campo Número é exibida a mensagem de erro em modal', () => {
    // Exemplo: só caracteres especiais, para disparar erro
    cy.get('#numero').clear().type('!@#$%');
    cy.contains('Salvar').click();

    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Preencher corretamente o campo Número, dúvida entrar em requisitos!');

    cy.get('.modal button').contains('OK').click();
  });
});

