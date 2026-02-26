import { gerarPayloadBase } from '../../../support/utils/massaUsuario'

describe('Cadastro - Smoke', () => {
  it('Deve cadastrar com payload completo', () => {

    const usuario = gerarPayloadBase()

    cy.cadastrarUI(usuario)
  })
})




