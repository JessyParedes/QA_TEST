import formulario2Page from '../../support/pages/formulario2Page'
import { massasFormulario2 } from '../../support/utils/massaFormulario2'

describe('Formulário 2 - Smoke', () => {
  beforeEach(() => {
    formulario2Page.visit()
  })

  it('Deve enviar formulário com sucesso', () => {
    const usuario = massasFormulario2.valida

    formulario2Page.preencherFormulario(usuario)
    formulario2Page.clicarEnviar()

    formulario2Page.validarMensagem('Formulário enviado com sucesso!')
  })
})