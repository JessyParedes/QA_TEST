import formulario3Page from '../../support/pages/formulario3Page'
import { massasFormulario3 } from '../../support/utils/massaFormulario3'

describe('Formulário 3 - Validações de Upload', () => {
  beforeEach(() => {
    formulario3Page.visit()
  })

  it('Deve exibir erro ao selecionar arquivo inválido para PDF', () => {
    formulario3Page.anexarPdf(massasFormulario3.pdfInvalido.pdf)

    formulario3Page.validarMensagem('Campo para arquivo PDF, dúvidas entrar em requisitos!')
  })

  it('Deve exibir erro ao selecionar arquivo inválido para DOCX', () => {
    formulario3Page.anexarDocx(massasFormulario3.docxInvalido.docx)

    formulario3Page.validarMensagem('Campo para arquivo DOCX, dúvidas entrar em requisitos!')
  })

  it('Deve exibir erro ao selecionar arquivo inválido para JPG', () => {
    formulario3Page.anexarJpg(massasFormulario3.jpgInvalido.jpg)

    formulario3Page.validarMensagem('Campo para arquivo JPG, dúvidas entrar em requisitos!')
  })

  it('Deve exibir erro ao selecionar arquivo inválido para XLSX', () => {
    formulario3Page.anexarXlsx(massasFormulario3.xlsxInvalido.xlsx)

    formulario3Page.validarMensagem('Campo para arquivo XLSX, dúvidas entrar em requisitos!')
  })

  it('Deve exibir erro ao selecionar arquivo inválido para TXT', () => {
    formulario3Page.anexarTxt(massasFormulario3.txtInvalido.txt)

    formulario3Page.validarMensagem('Campo para arquivo TXT, dúvidas entrar em requisitos!')
  })
})