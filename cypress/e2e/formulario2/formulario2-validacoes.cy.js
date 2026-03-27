import formulario2Page from '../../support/pages/formulario2Page'
import { massasFormulario2 } from '../../support/utils/massaFormulario2'

describe('Formulário 2 - Validações', () => {
  beforeEach(() => {
    formulario2Page.visit()
  })

  it('Deve exibir erro ao enviar com sexo vazio', () => {
    formulario2Page.preencherFormulario(massasFormulario2.sexoVazio)
    formulario2Page.clicarEnviar()

    formulario2Page.validarMensagem('Preencher corretamente o campo Sexo, dúvida entrar em requisitos!')
  })

  it('Deve exibir erro ao enviar sem interesses selecionados', () => {
    formulario2Page.preencherFormulario(massasFormulario2.interessesVazio)
    formulario2Page.clicarEnviar()

    formulario2Page.validarMensagem('Selecione ao menos uma opção em Interesses, dúvida entrar em requisitos!')
  })

  it('Deve exibir erro ao enviar com data de nascimento vazia', () => {
    formulario2Page.preencherFormulario(massasFormulario2.dataNascimentoVazia)
    formulario2Page.clicarEnviar()

    formulario2Page.validarMensagem('Preencher corretamente o campo Data de Nascimento, dúvida entrar em requisitos!')
  })

  it('Deve exibir erro ao enviar com data de nascimento futura', () => {
    formulario2Page.preencherFormulario(massasFormulario2.dataNascimentoFutura)
    formulario2Page.clicarEnviar()

    formulario2Page.validarMensagem('Data de Nascimento não pode ser futura!')
  })

  it('Deve exibir erro ao enviar com idade inferior a 16 anos', () => {
    formulario2Page.preencherFormulario(massasFormulario2.dataNascimentoMenorDe16)
    formulario2Page.clicarEnviar()

    formulario2Page.validarMensagem('Idade mínima permitida é de 16 anos!')
  })

  it('Deve exibir erro ao enviar com telefone vazio', () => {
    formulario2Page.preencherFormulario(massasFormulario2.telefoneVazio)
    formulario2Page.clicarEnviar()

    formulario2Page.validarMensagem('Preencher corretamente o campo Telefone, dúvida entrar em requisitos!')
  })

  it('Deve exibir erro ao enviar com telefone contendo letras', () => {
    formulario2Page.preencherFormulario(massasFormulario2.telefoneComLetras)
    formulario2Page.clicarEnviar()

    formulario2Page.validarMensagem('Telefone inválido! Use apenas números sem espaços ou caracteres especiais.')
  })

  it('Deve exibir erro ao enviar com telefone contendo espaços', () => {
    formulario2Page.preencherFormulario(massasFormulario2.telefoneComEspacos)
    formulario2Page.clicarEnviar()

    formulario2Page.validarMensagem('Telefone inválido! Use apenas números sem espaços ou caracteres especiais.')
  })

  it('Deve exibir erro ao enviar com telefone contendo máscara', () => {
    formulario2Page.preencherFormulario(massasFormulario2.telefoneComMascara)
    formulario2Page.clicarEnviar()

    formulario2Page.validarMensagem('Telefone inválido! Use apenas números sem espaços ou caracteres especiais.')
  })

  it('Deve exibir erro ao enviar com CPF vazio', () => {
    formulario2Page.preencherFormulario(massasFormulario2.cpfVazio)
    formulario2Page.clicarEnviar()

    formulario2Page.validarMensagem('Preencher corretamente o campo CPF, dúvida entrar em requisitos!')
  })

  it('Deve exibir erro ao enviar com CPF contendo máscara', () => {
    formulario2Page.preencherFormulario(massasFormulario2.cpfComMascara)
    formulario2Page.clicarEnviar()

    formulario2Page.validarMensagem('CPF inválido! Use apenas números sem pontos, traços ou outros caracteres.')
  })

  it('Deve exibir erro ao enviar com CPF inválido', () => {
    formulario2Page.preencherFormulario(massasFormulario2.cpfInvalido)
    formulario2Page.clicarEnviar()

    formulario2Page.validarMensagem('CPF inválido! Use apenas números sem pontos, traços ou outros caracteres.')
  })
})