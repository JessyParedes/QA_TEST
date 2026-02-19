describe('Validação do Campo Cidade', () => {
  beforeEach(() => {
    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/formulario-1.html');

    // Preencher os outros campos obrigatórios para isolar o teste no campo Cidade
    cy.get('#logradouro').clear().type('Rua das Flores');
    cy.get('#numero').clear().type('123');
    cy.get('#complemento').clear().type('Apartamento 101');
    cy.get('#bairro').clear().type('Centro');
    cy.get('#estado').clear().type('SP');
    cy.get('#cep').clear().type('01001000');
  });

  it('Verificar se o campo Cidade permite digitar texto com no mínimo 3 caracteres', () => {
    cy.get('#cidade').clear().type('São Paulo'); // Texto válido
    cy.contains('Salvar').click();

    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Endereço cadastrado com sucesso!');

    cy.get('.modal button').contains('OK').click();
  });

  it('Verificar se o campo Cidade não permite ficar vazio', () => {
    cy.get('#cidade').clear(); // Campo vazio
    cy.contains('Salvar').click();

    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Preencher corretamente o campo Cidade, dúvida entrar em requisitos!');

    cy.get('.modal button').contains('OK').click();
  });

  it('Verificar se o campo Cidade não aceita números isolados', () => {
    cy.get('#cidade').clear().type('12345'); // Apenas números
    cy.contains('Salvar').click();

    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Preencher corretamente o campo Cidade, dúvida entrar em requisitos!');

    cy.get('.modal button').contains('OK').click();
  });

  it('Verificar se ao preencher incorretamente o campo Cidade é exibida a mensagem de erro em modal', () => {
    cy.get('#cidade').clear().type('SP'); // Menos de 3 caracteres
    cy.contains('Salvar').click();

    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Preencher corretamente o campo Cidade, dúvida entrar em requisitos!');

    cy.get('.modal button').contains('OK').click();
  });
});
