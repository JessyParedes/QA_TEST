describe('Validação do Botão Voltar', () => {

  beforeEach(() => {
    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/formulario-1.html');
  });

  it('Verificar se ao clicar no botão Voltar a página redireciona para home.html', () => {
    // Clica no botão Voltar
    cy.contains('Voltar').click();

    // Verifica se a URL atual contém "home.html"
    cy.url().should('include', 'home.html');
  });

});
