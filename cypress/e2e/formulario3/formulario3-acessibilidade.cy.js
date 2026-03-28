import formulario3Page from '../../support/pages/formulario3Page'

describe('Formulário 3 - Acessibilidade', () => {
  beforeEach(() => {
    formulario3Page.visit()
  })

  it('Deve exibir botão de leitura em áudio', () => {
    formulario3Page.validarBotaoAudioVisivel()
  })

  it('Deve exibir avatar VLibras', () => {
    formulario3Page.validarVlibrasVisivel()
  })
})