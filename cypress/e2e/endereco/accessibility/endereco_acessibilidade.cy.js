describe('Validação de Acessibilidade - Cadastro de Endereço', () => {

  const url = 'https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/formulario-1.html';

  beforeEach(() => {
    cy.visit(url);
  });

  it('Verificar se é possível clicar no botão de VLibras e carregar o widget', () => {
    // Clica no botão de VLibras
    cy.get('.vp-access-button')
      .should('be.visible')
      .click();

    // Espera pelo iframe do VLibras carregar
    cy.get('iframe[src*="vlibras.gov.br"]', { timeout: 10000 }) // espera até 10s
      .should('exist')
      .then($iframe => {
        // Confirma que o conteúdo dentro do iframe existe
        const $body = $iframe.contents().find('body');
        cy.wrap($body).should('not.be.empty');
      });
  });

});



