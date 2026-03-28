import formulario3Page from '../../support/pages/formulario3Page'
import { massasFormulario3 } from '../../support/utils/massaFormulario3'

describe('Formulário 3 - Smoke', () => {
  beforeEach(() => {
    formulario3Page.visit()
  })

  it('Deve enviar formulário com sucesso com todos os campos válidos', () => {
    formulario3Page.preencherFormulario(massasFormulario3.valida)
    formulario3Page.clicarEnviar()

    formulario3Page.validarMensagem('Formulário enviado com sucesso!')
  })
})