describe('Validação do Campo Logradouro', () => {
  beforeEach(() => {
    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/formulario-1.html');
  });

  it('Verificar mensagem de erro ao preencher incorretamente o campo Logradouro', () => {
    // Preenche Logradouro incorretamente (exemplo: apenas números)
    cy.get('#logradouro').clear().type('123456');

    // Preenche os outros campos obrigatórios com valores válidos para não gerar erro neles
    cy.get('#numero').clear().type('123');               // Campo Número correto
    cy.get('#bairro').clear().type('Centro');            // Campo Bairro correto
    cy.get('#cidade').clear().type('São Paulo');         // Campo Cidade correto
    cy.get('#estado').clear().type('SP');                 // Campo Estado correto
    cy.get('#cep').clear().type('01001000');              // Campo CEP correto, formato numérico válido

    // Clica em salvar para disparar as validações
    cy.contains('Salvar').click();

    // Verifica se a modal com a mensagem do Logradouro é exibida
    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Preencher corretamente o campo Logradouro, dúvida entrar em requisitos!');

    // Fecha a modal (ajuste seletor se necessário)
    cy.get('.modal button').contains('OK').click();
  });
});


