import { gerarPayloadBase } from '../../support/utils/massaUsuario';


describe('Validações de Senha', () => {

  it('Deve validar senhas diferentes', () => {

    const usuario = {
      ...gerarPayloadBase(),
      confirmarSenha: 'SenhaDiferente123'
    };

    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/cadastro.html');

    cy.get('#nome').type(usuario.nome);
    cy.get('#email').type(usuario.email);
    cy.get('#senha').type(usuario.senha);
    cy.get('#confirmarSenha').type(usuario.confirmarSenha);

    cy.contains('Cadastrar').click();

    cy.contains('As senhas não coincidem').should('be.visible');
  });

});
