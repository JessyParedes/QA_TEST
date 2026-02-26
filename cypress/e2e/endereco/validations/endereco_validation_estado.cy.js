import EnderecoPage from '../../../support/pages/EnderecoPage'

describe('Validação do Campo Estado (UF)', () => {

  const estadosValidos = [
    'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG',
    'PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'
  ]

  const estadosInvalidos = [
    { descricao: 'campo vazio', valor: '' },
    { descricao: 'menos de 2 caracteres', valor: 'S' },
    { descricao: 'mais de 2 caracteres', valor: 'SPO' },
    { descricao: 'UF inexistente', valor: 'XX' }
  ]

  beforeEach(() => {
    EnderecoPage.visit()

    // Preenche os campos obrigatórios exceto Estado
    EnderecoPage.fillLogradouro('Rua das Flores')
    EnderecoPage.fillNumero('123')
    EnderecoPage.fillComplemento('Apartamento 101')
    EnderecoPage.fillBairro('Centro')
    EnderecoPage.fillCidade('São Paulo')
    EnderecoPage.fillCep('01001000')
  })

  // ✅ Deve aceitar apenas 2 letras
  it('Deve permitir apenas 2 letras no campo Estado', () => {
    EnderecoPage.fillEstado('SP')
    cy.get('#estado').invoke('val').should('have.length', 2)
  })


  // ✅ Deve converter minúsculas para maiúsculas
  it('Deve converter automaticamente para maiúsculas', () => {
    EnderecoPage.fillEstado('sp')
    cy.get('#estado').invoke('val').should('eq', 'SP')
  })


  // ✅ Todas UFs válidas devem salvar com sucesso
  estadosValidos.forEach(sigla => {

    it(`Deve aceitar UF válida (${sigla})`, () => {

      EnderecoPage.fillEstado(sigla)
      EnderecoPage.salvar()

      cy.get('#modalMensagem')
        .should('be.visible')
        .within(() => {
          cy.contains('Endereço cadastrado com sucesso!').should('be.visible')
        })

      cy.contains('button', 'OK').click()
    })

  })


  // 🔴 Estados inválidos
  estadosInvalidos.forEach(({ descricao, valor }) => {

    it(`Deve validar estado inválido (${descricao})`, () => {

      cy.get('#estado').clear()
      if (valor !== '') {
        cy.get('#estado').type(valor)
      }

      EnderecoPage.salvar()

      cy.get('#modalMensagemErro', { timeout: 10000 })
        .should('have.css', 'display', 'flex')
        .and('be.visible')
        .within(() => {

          // Caso específico para UF inexistente
          if (valor === 'XX') {
            cy.contains(/UF inválida/i).should('be.visible')
          }

          cy.contains(/Preencher corretamente o campo\s*Estado/i)
            .should('be.visible')
        })

      cy.get('#modalFecharErro').should('be.visible').click()
      cy.get('#modalMensagemErro')
        .should('have.css', 'display', 'none')

    })

  })

})