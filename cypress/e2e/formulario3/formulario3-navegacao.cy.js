import formulario3Page from '../../support/pages/formulario3Page'

describe('Formulário 3 - Navegação', () => {
  beforeEach(() => {
    formulario3Page.visit()
  })

  it('Deve redirecionar para home ao clicar em Voltar', () => {
    cy.contains('button, a', 'Voltar').click({ force: true })
    cy.url().should('include', 'home.html')
  })

  it('Deve redirecionar para a tela de requisitos ao clicar em Requisitos', () => {
    cy.contains('button, a', 'Requisitos').click({ force: true })
    cy.url().should('include', 'formulario-3-requisitos.html')
  })
})