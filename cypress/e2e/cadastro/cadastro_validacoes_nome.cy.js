import { gerarPayloadBase } from '../../support/utils/massaUsuario';

describe('Validações de Nome', () => {

  it('Deve validar nome obrigatório', () => {

    const usuario = {
      ...gerarPayloadBase(),
      nome: ''   // 🔥 campo testado
    };

    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/cadastro.html');

    cy.get('#nome').type(usuario.nome);
    cy.get('#email').type(usuario.email);
    cy.get('#senha').type(usuario.senha);
    cy.get('#confirmarSenha').type(usuario.confirmarSenha);

    cy.contains('Cadastrar').click();

    cy.contains('Nome é obrigatório').should('be.visible');
  });

});
