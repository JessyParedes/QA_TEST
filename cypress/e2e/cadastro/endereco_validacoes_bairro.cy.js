describe('Validação do Campo Bairro', () => {
  beforeEach(() => {
    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/formulario-1.html');

    // Preencher os outros campos obrigatórios para isolar o teste no campo Bairro
    cy.get('#logradouro').clear().type('Rua das Flores');
    cy.get('#numero').clear().type('123');
    cy.get('#complemento').clear().type('Apartamento 101');
    cy.get('#cidade').clear().type('São Paulo');
    cy.get('#estado').clear().type('SP');
    cy.get('#cep').clear().type('01001000');
  });

  it('Verificar se o campo Bairro permite digitar texto com no mínimo 3 caracteres', () => {
    cy.get('#bairro').clear().type('Jardim'); // Texto válido
    cy.contains('Salvar').click();

    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Endereço cadastrado com sucesso!');

    cy.get('.modal button').contains('OK').click();
  });

  it('Verificar se o campo Bairro não permite ficar vazio', () => {
    cy.get('#bairro').clear(); // Campo vazio
    cy.contains('Salvar').click();

    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Preencher corretamente o campo Bairro, dúvida entrar em requisitos!');

    cy.get('.modal button').contains('OK').click();
  });

  it('Verificar se o campo Bairro não aceita números isolados', () => {
    cy.get('#bairro').clear().type('12345'); // Apenas números
    cy.contains('Salvar').click();

    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Preencher corretamente o campo Bairro, dúvida entrar em requisitos!');

    cy.get('.modal button').contains('OK').click();
  });

  it('Verificar se ao preencher incorretamente o campo Bairro é exibida a mensagem de erro em modal', () => {
    cy.get('#bairro').clear().type('12'); // Menos de 3 caracteres
    cy.contains('Salvar').click();

    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Preencher corretamente o campo Bairro, dúvida entrar em requisitos!');

    cy.get('.modal button').contains('OK').click();
  });
});
