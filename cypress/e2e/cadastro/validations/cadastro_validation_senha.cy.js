import { gerarPayloadBase } from '../../../support/utils/massaUsuario'
import CadastroPage from '../../../support/pages/CadastroPage'

describe('Validações de Senha', () => {

  const senhasInvalidas = [
    { descricao: 'menos de 6 caracteres', valor: 'A1@a' },
    { descricao: 'sem número', valor: 'Senha@A' },
    { descricao: 'sem letra maiúscula', valor: 'senha1@' },
    { descricao: 'sem caractere especial', valor: 'Senha12' },
    { descricao: 'mais de 12 caracteres', valor: 'Senha12345@A' }
  ]

  const validarModalErroSenha = () => {
    cy.get('#modalMensagemErro', { timeout: 10000 })
      .should('exist')
      .and('be.visible')
      .within(() => {
        cy.contains('Erro no Cadastro').should('be.visible')
        cy.contains(/Preencher corretamente o campo\s*Senha/i)
          .should('be.visible')
      })
  }

  const validarModalSenhaDiferente = () => {
    cy.get('#modalMensagemErro', { timeout: 10000 })
      .should('exist')
      .and('be.visible')
      .within(() => {
        cy.contains(/As senhas não conferem/i)
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

  // 🔴 Validação das regras de senha
  senhasInvalidas.forEach(({ descricao, valor }) => {

    it(`Deve exibir modal de erro para senha inválida (${descricao})`, () => {

      const usuario = gerarPayloadBase({
        senha: valor,
        confirmarSenha: valor
      })

      CadastroPage.cadastrar(usuario)

      // Requisito: SEMPRE deve exibir modal
      validarModalErroSenha()

      fecharModalErro()
    })

  })

  // 🔴 Validação de senhas diferentes
  it('Deve exibir modal quando as senhas forem diferentes', () => {

    const usuario = gerarPayloadBase({
      senha: 'Senha1@',
      confirmarSenha: 'SenhaDiferente1@'
    })

    CadastroPage.cadastrar(usuario)

    validarModalSenhaDiferente()

    fecharModalErro()
  })

})