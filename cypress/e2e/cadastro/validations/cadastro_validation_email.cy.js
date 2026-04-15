import { gerarPayloadBase } from '../../../support/utils/massaUsuario'
import CadastroPage from '../../../support/pages/npx '

describe('Validações de Email', () => {
  const emailsInvalidos = [
    { descricao: 'sem @', valor: 'emailparedes.com' },
    { descricao: 'sem domínio', valor: 'email@' },
    { descricao: 'com espaço', valor: 'email i@gmail.com' },
    { descricao: 'domínio incompleto', valor: 'email@gmail' },
    { descricao: 'com dois @@', valor: 'email@@gmail.com' },
    { descricao: 'com caracteres inválidos', valor: 'email#gmail.com' },
    { descricao: 'vazio', valor: '' },
  ]

  const validarModalErroEmail = () => {
    cy.get('#modalMensagemErro', { timeout: 10000 })
      .should('exist')
      .and('be.visible')
      .within(() => {
        cy.contains('Erro no Cadastro').should('be.visible')
        cy.contains(/Preencher corretamente o campo\s*E-?mail/i).should('be.visible')
      })
  }

  const fecharModalErro = () => {
    cy.get('#modalFecharErro', { timeout: 10000 })
      .should('be.visible')
      .click()

    // Confirma que fechou (prefiro validar visibilidade + display, quando aplicável)
    cy.get('#modalMensagemErro')
      .should('not.be.visible')
      .and(($el) => {
        // fallback caso o app controle por display none
        expect($el.css('display')).to.match(/none|/i)
      })
  }

  beforeEach(() => {
    CadastroPage.visit()
  })

  emailsInvalidos.forEach(({ descricao, valor }) => {
    it(`Deve exibir modal de erro para email inválido (${descricao})`, () => {
      const usuario = gerarPayloadBase({ email: valor })

      CadastroPage.cadastrar(usuario)

      // Requisito: SEMPRE exibe modal
      validarModalErroEmail()

      // Fecha modal e confirma fechamento
      fecharModalErro()
    })
  })
})