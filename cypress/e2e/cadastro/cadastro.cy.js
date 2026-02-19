import { fakerPT_BR as faker } from '@faker-js/faker';
import { gerarSenhaValida } from '../../support/utils/senha';


describe('Cadastro', () => {
  it('Deve cadastrar com payload completo', () => {

    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/cadastro.html');

    // Gera senha segura
    const senha = gerarSenhaValida();

    // Payload completo
    const usuario = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      senha: senha,
      confirmarSenha: senha
    };

    // Preenche o formulário
    cy.get('#nome').type(usuario.nome);
    cy.get('#email').type(usuario.email, { log: false });        // email mascarado no log
    cy.get('#senha').type(usuario.senha, { log: false });        // senha mascarada
    cy.get('#confirmarSenha').type(usuario.confirmarSenha, { log: false });

    // Clica no botão cadastrar
    cy.contains('button', 'Cadastrar').click();

    // Log do payload mascarado (opcional)
    const payloadSeguro = {
      ...usuario,
      email: '*****@email.com',
      senha: '********',
      confirmarSenha: '********'
    };
    cy.log(JSON.stringify(payloadSeguro));
  });
});




