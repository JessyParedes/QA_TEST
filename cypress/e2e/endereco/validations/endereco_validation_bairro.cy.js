import EnderecoPage from '../../../support/pages/EnderecoPage'

describe('Validação do Campo Bairro', () => {

  const bairrosInvalidos = [
    { descricao: 'campo vazio', valor: '' },
    { descricao: 'apenas números', valor: '12345' },
    { descricao: 'menos de 3 caracteres', valor: '12' }
  ]

  beforeEach(() => {
    EnderecoPage.visit()

    // Preenche os campos obrigatórios exceto Bairro
    EnderecoPage.fillLogradouro('Rua das Flores')
    EnderecoPage.fillNumero('123')
    EnderecoPage.fillComplemento('Apartamento 101')
    EnderecoPage.fillCidade('São Paulo')
    EnderecoPage.fillEstado('SP')
    EnderecoPage.fillCep('01001000')
  })

  // ✅ Cenário válido
  it('Deve permitir Bairro com no mínimo 3 caracteres', () => {

    EnderecoPage.fillBairro('Jardim')
    EnderecoPage.salvar()

    cy.get('#modalMensagem')
      .should('be.visible')
      .within(() => {
        cy.contains('Endereço cadastrado com sucesso!').should('be.visible')
      })

    cy.contains('OK').click()
  })

  // 🔴 Cenários inválidos
  bairrosInvalidos.forEach(({ descricao, valor }) => {

    it(`Deve validar bairro inválido (${descricao})`, () => {

      cy.get('#bairro').clear()
      if (valor !== '') {
        cy.get('#bairro').type(valor)
      }

      EnderecoPage.salvar()

      // Aguarda modal de erro
      cy.get('#modalMensagemErro', { timeout: 10000 })
        .should('have.css', 'display', 'flex')
        .and('be.visible')
        .within(() => {

          cy.contains('Erro no Cadastro').should('be.visible')

          cy.contains(/Preencher corretamente o campo\s*Bairro/i)
            .should('be.visible')
        })

      cy.get('#modalFecharErro').should('be.visible').click()
      cy.get('#modalMensagemErro')
        .should('have.css', 'display', 'none')

    })

  })

})