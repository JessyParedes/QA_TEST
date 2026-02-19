describe('Validação do Botão Requisitos', () => {

  beforeEach(() => {
    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/formulario-1.html');
  });

  it('Verificar se ao clicar no botão Requisitos a página redireciona para formulario-1-requisitos.html', () => {
    // Clica no botão Requisitos
    cy.contains('Requisitos').click();

    // Verifica se a URL atual contém "formulario-1-requisitos.html"
    cy.url().should('include', 'formulario-1-requisitos.html');
  });

});
