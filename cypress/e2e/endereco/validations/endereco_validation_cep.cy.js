import EnderecoPage from '../../../support/pages/EnderecoPage'

describe('Validação do Campo CEP', () => {

  const cepsInvalidos = [
    { descricao: 'campo vazio', valor: '' },
    { descricao: 'com letras', valor: 'ABC12@34' },
    { descricao: 'menos de 8 dígitos', valor: '1234' },
    { descricao: 'mais de 8 dígitos', valor: '123456789' }
  ]

  beforeEach(() => {
    EnderecoPage.visit()

    // Preenche campos obrigatórios exceto CEP
    EnderecoPage.fillLogradouro('Rua das Flores')
    EnderecoPage.fillNumero('123')
    EnderecoPage.fillComplemento('Apartamento 101')
    EnderecoPage.fillBairro('Centro')
    EnderecoPage.fillCidade('São Paulo')
    EnderecoPage.fillEstado('SP')
  })

  // ✅ Validação de máscara automática
  it('Deve aplicar máscara automática no formato 00000-000', () => {

    EnderecoPage.fillCep('01001000')

    cy.get('#cep')
      .invoke('val')
      .should('match', /^\d{5}-\d{3}$/)

    cy.get('#cep')
      .invoke('val')
      .should('eq', '01001-000')
  })


  // 🔴 Cenários inválidos
  cepsInvalidos.forEach(({ descricao, valor }) => {

    it(`Deve validar CEP inválido (${descricao})`, () => {

      cy.get('#cep').clear()

      if (valor !== '') {
        cy.get('#cep').type(valor)
      }

      EnderecoPage.salvar()

      cy.get('#modalMensagemErro', { timeout: 10000 })
        .should('have.css', 'display', 'flex')
        .and('be.visible')
        .within(() => {

          cy.contains('Erro no Cadastro').should('be.visible')

          cy.contains(/Preencher corretamente o campo\s*CEP/i)
            .should('be.visible')
        })

      cy.get('#modalFecharErro').should('be.visible').click()

      cy.get('#modalMensagemErro')
        .should('have.css', 'display', 'none')

    })

  })

})