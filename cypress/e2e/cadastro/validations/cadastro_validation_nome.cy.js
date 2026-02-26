import { gerarPayloadBase } from '../../../support/utils/massaUsuario'
import CadastroPage from '../../../support/pages/CadastroPage'

describe('Validações de Nome', () => {

  const nomesInvalidos = [
    { descricao: 'campo vazio', valor: '' },
    { descricao: 'sem sobrenome', valor: 'Carlos' },
    { descricao: 'menos de 3 caracteres no nome', valor: 'Al Souza' },
    { descricao: 'menos de 3 caracteres no sobrenome', valor: 'Carlos Li' },
    { descricao: 'com número', valor: 'Carlos1 Silva' },
    { descricao: 'com caractere especial', valor: 'Carlos@ Silva' },
    { descricao: 'dois espaços seguidos', valor: 'Carlos  Silva' },
    { descricao: 'menos de 7 caracteres total', valor: 'A B' },
    { descricao: 'mais de 64 caracteres', valor: 'Carlos'.repeat(15) }
  ]

  const validarModalErroNome = () => {
    cy.get('#modalMensagemErro', { timeout: 10000 })
      .should('exist')
      .and('be.visible')
      .within(() => {
        cy.contains('Erro no Cadastro').should('be.visible')
        cy.contains(/Preencher corretamente o campo\s*Nome/i)
          .should('be.visible')
      })
  }

  const fecharModalErro = () => {
    cy.get('#modalFecharErro', { timeout: 10000 })
      .should('be.visible')
      .click()

    cy.get('#modalMensagemErro')
      .should('not.be.visible')
      .and(($el) => {
        expect($el.css('display')).to.match(/none|/i)
      })
  }

  beforeEach(() => {
    CadastroPage.visit()
  })

  nomesInvalidos.forEach(({ descricao, valor }) => {

    it(`Deve exibir modal de erro para nome inválido (${descricao})`, () => {

      const usuario = gerarPayloadBase({ nome: valor })

      // Ideal: usar a Page Object se existir método cadastrar
      CadastroPage.cadastrar(usuario)

      // 🔎 Requisito: SEMPRE deve exibir modal
      validarModalErroNome()

      // 🔒 Fecha e valida encerramento
      fecharModalErro()
    })

  })

})