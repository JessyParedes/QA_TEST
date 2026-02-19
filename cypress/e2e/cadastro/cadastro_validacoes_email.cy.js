import { gerarPayloadBase } from '../../support/utils/massaUsuario';


describe('Validações de Email', () => {

  it('Deve validar email inválido', () => {

    const usuario = {
      ...gerarPayloadBase(),
      email: 'email-invalido'
    };

    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/cadastro.html');

    cy.get('#nome').type(usuario.nome);
    cy.get('#email').type(usuario.email);
    cy.get('#senha').type(usuario.senha);
    cy.get('#confirmarSenha').type(usuario.confirmarSenha);

    cy.contains('Cadastrar').click();

    cy.contains('Email inválido').should('be.visible');
  });

});
