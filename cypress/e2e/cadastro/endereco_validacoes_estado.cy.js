describe('Validação do Campo Estado', () => {

  const estadosValidos = [
    'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG',
    'PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'
  ];

  beforeEach(() => {
    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/formulario-1.html');

    // Preencher os outros campos obrigatórios para isolar o teste no campo Estado
    cy.get('#logradouro').clear().type('Rua das Flores');
    cy.get('#numero').clear().type('123');
    cy.get('#complemento').clear().type('Apartamento 101');
    cy.get('#bairro').clear().type('Centro');
    cy.get('#cidade').clear().type('São Paulo');
    cy.get('#cep').clear().type('01001000');
  });

  it('Verificar se o campo Estado permite digitar apenas 2 letras', () => {
    cy.get('#estado').clear().type('SP');
    cy.get('#estado').invoke('val').should('have.length', 2);
  });

  it('Verificar se o campo Estado não permite ficar vazio', () => {
    cy.get('#estado').clear();
    cy.contains('Salvar').click();

    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Preencher corretamente o campo Estado, dúvida entrar em requisitos!');

    cy.get('.modal button').contains('OK').click();
  });

  it('Verificar se o campo Estado aceita letras minúsculas e converte automaticamente para maiúsculas', () => {
    cy.get('#estado').clear().type('sp');
    cy.get('#estado').invoke('val').should('eq', 'SP'); // Verifica conversão automática
  });

  it('Verificar se o campo Estado valida se a sigla UF existe na lista oficial', () => {
    estadosValidos.forEach(sigla => {
      cy.get('#estado').clear().type(sigla);
      cy.contains('Salvar').click();

      cy.get('.modal').should('be.visible')
        .and('contain.text', 'Endereço cadastrado com sucesso!');

      cy.get('.modal button').contains('OK').click();
    });
  });

  it('Verificar se ao preencher incorretamente o campo Estado é exibida a mensagem de erro em modal', () => {
    cy.get('#estado').clear().type('S'); // Menos de 2 caracteres
    cy.contains('Salvar').click();

    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Preencher corretamente o campo Estado, dúvida entrar em requisitos!');

    cy.get('.modal button').contains('OK').click();
  });

  it('Verificar se ao preencher uma UF inválida é exibida a mensagem específica em modal', () => {
    cy.get('#estado').clear().type('XX'); // UF inexistente
    cy.contains('Salvar').click();

    cy.get('.modal').should('be.visible')
      .and('contain.text', 'UF inválida! Preencher corretamente o campo Estado, dúvida entrar em requisitos!');

    cy.get('.modal button').contains('OK').click();
  });

});
