import formulario3Page from '../../support/pages/formulario3Page'
import { massasFormulario3 } from '../../support/utils/massaFormulario3'

describe('Formulário 3 - Validações de Localização', () => {
  beforeEach(() => {
    formulario3Page.visit()
  })

  it('Deve exibir erro ao enviar com país vazio', () => {
    const dados = massasFormulario3.paisVazio

    formulario3Page.anexarPdf(dados.pdf)
    formulario3Page.anexarDocx(dados.docx)
    formulario3Page.anexarJpg(dados.jpg)
    formulario3Page.anexarXlsx(dados.xlsx)
    formulario3Page.anexarTxt(dados.txt)
    formulario3Page.selecionarEstado(dados.estado)
    formulario3Page.selecionarCidade(dados.cidade)
    formulario3Page.clicarEnviar()

    formulario3Page.validarMensagem('Preencha corretamente os campos de País, Estado e Cidade.')
  })

  it('Deve exibir erro ao enviar com estado vazio', () => {
    const dados = massasFormulario3.estadoVazio

    formulario3Page.anexarPdf(dados.pdf)
    formulario3Page.anexarDocx(dados.docx)
    formulario3Page.anexarJpg(dados.jpg)
    formulario3Page.anexarXlsx(dados.xlsx)
    formulario3Page.anexarTxt(dados.txt)
    formulario3Page.selecionarPais(dados.pais)
    formulario3Page.selecionarCidade(dados.cidade)
    formulario3Page.clicarEnviar()

    formulario3Page.validarMensagem('Preencha corretamente os campos de País, Estado e Cidade.')
  })

  it('Deve exibir erro ao enviar com cidade vazia', () => {
    const dados = massasFormulario3.cidadeVazia

    formulario3Page.anexarPdf(dados.pdf)
    formulario3Page.anexarDocx(dados.docx)
    formulario3Page.anexarJpg(dados.jpg)
    formulario3Page.anexarXlsx(dados.xlsx)
    formulario3Page.anexarTxt(dados.txt)
    formulario3Page.selecionarPais(dados.pais)
    formulario3Page.selecionarEstado(dados.estado)
    formulario3Page.clicarEnviar()

    formulario3Page.validarMensagem('Preencha corretamente os campos de País, Estado e Cidade.')
  })
})