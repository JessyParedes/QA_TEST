import EnderecoPage from '../../../support/pages/EnderecoPage'

describe('Validação do Campo Cidade', () => {
  const cidadesInvalidas = [
    { descricao: 'campo vazio', valor: '' },
    { descricao: 'apenas números', valor: '12345' },
    { descricao: 'menos de 3 caracteres', valor: 'SP' },
  ]

  beforeEach(() => {
    EnderecoPage.visit()

    // Preenche os campos obrigatórios exceto Cidade
    EnderecoPage.fillLogradouro('Rua das Flores')
    EnderecoPage.fillNumero('123')
    EnderecoPage.fillComplemento('Apartamento 101')
    EnderecoPage.fillBairro('Centro')
    EnderecoPage.fillEstado('SP')
    EnderecoPage.fillCep('01001000')
  })

  // ✅ Cenário válido
  it('Deve permitir Cidade com no mínimo 3 caracteres', () => {
    EnderecoPage.fillCidade('São Paulo')
    EnderecoPage.salvar()

    // Modal de sucesso (normalmente é o modal "normal", não o de erro)
    cy.get('#modalMensagem')
      .should('be.visible')
      .within(() => {
        cy.contains('Endereço cadastrado com sucesso!').should('be.visible')
      })

    cy.contains('button', 'OK').click()
  })

  // 🔴 Cenários inválidos
  cidadesInvalidas.forEach(({ descricao, valor }) => {
    it(`Deve validar cidade inválida (${descricao})`, () => {
      cy.get('#cidade').clear()
      if (valor !== '') {
        cy.get('#cidade').type(valor)
      }

      EnderecoPage.salvar()

      cy.get('#modalMensagemErro', { timeout: 10000 })
        .should('have.css', 'display', 'flex')
        .and('be.visible')
        .within(() => {
          cy.contains('Erro no Cadastro').should('be.visible')
          cy.contains(/Preencher corretamente o campo\s*Cidade/i).should('be.visible')
        })

      cy.get('#modalFecharErro').should('be.visible').click()
      cy.get('#modalMensagemErro').should('have.css', 'display', 'none')
    })
  })
})