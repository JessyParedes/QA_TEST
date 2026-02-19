describe('Validação do Campo Complemento', () => {
  beforeEach(() => {
    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/formulario-1.html');

    // Preencher os campos obrigatórios para isolar o teste no campo Complemento
    cy.get('#logradouro').clear().type('Rua das Flores');
    cy.get('#numero').clear().type('123');
    cy.get('#bairro').clear().type('Centro');
    cy.get('#cidade').clear().type('São Paulo');
    cy.get('#estado').clear().type('SP');
    cy.get('#cep').clear().type('01001000');
  });

  it('Verificar se o campo Complemento aceita texto livre', () => {
    cy.get('#complemento').clear().type('Apartamento 101, bloco B, fundos');
    cy.contains('Salvar').click();

    // Verifica que não aparece mensagem de erro, pois complemento é opcional e aceita texto
    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Endereço cadastrado com sucesso!');

    cy.get('.modal button').contains('OK').click();
  });

  it('Verificar se o campo Complemento pode ficar vazio', () => {
    cy.get('#complemento').clear();  // Deixa vazio
    cy.contains('Salvar').click();

    // Verifica que não aparece mensagem de erro, pois o campo é opcional
    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Endereço cadastrado com sucesso!');

    cy.get('.modal button').contains('OK').click();
  });
});
