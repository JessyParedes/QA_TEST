import EnderecoPage from '../../../support/pages/EnderecoPage'

describe('Validação do Campo Complemento', () => {

  beforeEach(() => {
    EnderecoPage.visit()

    // Preenche campos obrigatórios exceto Complemento
    EnderecoPage.fillLogradouro('Rua das Flores')
    EnderecoPage.fillNumero('123')
    EnderecoPage.fillBairro('Centro')
    EnderecoPage.fillCidade('São Paulo')
    EnderecoPage.fillEstado('SP')
    EnderecoPage.fillCep('01001000')
  })

  // ✅ Complemento preenchido corretamente
  it('Deve permitir preencher complemento com texto válido', () => {

    EnderecoPage.fillComplemento('Apartamento 101')
    EnderecoPage.salvar()

    cy.get('#modalMensagem')
      .should('be.visible')
      .within(() => {
        cy.contains('Endereço cadastrado com sucesso!').should('be.visible')
      })

    cy.contains('button', 'OK').click()
  })


  // ✅ Complemento vazio (caso seja opcional)
  it('Deve permitir deixar complemento vazio', () => {

    EnderecoPage.fillComplemento('')
    EnderecoPage.salvar()

    cy.get('#modalMensagem')
      .should('be.visible')
      .within(() => {
        cy.contains('Endereço cadastrado com sucesso!').should('be.visible')
      })

    cy.contains('button', 'OK').click()
  })


  // 🔴 Caso queira validar caracteres inválidos (se houver regra)
  it('Deve validar complemento com caracteres inválidos (se houver regra)', () => {

    EnderecoPage.fillComplemento('@#$%')
    EnderecoPage.salvar()

    cy.get('#modalMensagemErro', { timeout: 10000 })
      .should('have.css', 'display', 'flex')
      .and('be.visible')
      .within(() => {
        cy.contains(/Preencher corretamente o campo\s*Complemento/i).should('be.visible')
      })

    cy.get('#modalFecharErro').should('be.visible').click()
    cy.get('#modalMensagemErro')
      .should('have.css', 'display', 'none')
  })

})