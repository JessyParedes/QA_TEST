class Formulario3Page {
  elements = {
    arquivoPdf: () => cy.get('#arquivoPdf'),
    arquivoDocx: () => cy.get('#arquivoDocx'),
    arquivoJpg: () => cy.get('#arquivoJpg'),
    arquivoXlsx: () => cy.get('#arquivoXlsx'),
    arquivoTxt: () => cy.get('#arquivoTxt'),

    pais: () => cy.get('#pais'),
    estado: () => cy.get('#estado'),
    cidade: () => cy.get('#cidade'),

    btnEnviar: () => cy.get('[type="submit"]'),
    btnAudio: () => cy.get('#btn-audio'),
    avatarVlibras: () => cy.get('#\\#canvas')
  }

  visit() {
    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/formulario-3.html')
  }

  anexarPdf(caminho) {
    this.elements.arquivoPdf().selectFile(caminho, { force: true })
  }

  anexarDocx(caminho) {
    this.elements.arquivoDocx().selectFile(caminho, { force: true })
  }

  anexarJpg(caminho) {
    this.elements.arquivoJpg().selectFile(caminho, { force: true })
  }

  anexarXlsx(caminho) {
    this.elements.arquivoXlsx().selectFile(caminho, { force: true })
  }

  anexarTxt(caminho) {
    this.elements.arquivoTxt().selectFile(caminho, { force: true })
  }

  selecionarPais(valor) {
    if (valor !== '') {
      this.elements.pais().select(valor, { force: true })
    }
  }

  selecionarEstado(valor) {
    if (valor !== '') {
      this.elements.estado().select(valor, { force: true })
    }
  }

  selecionarCidade(valor) {
    if (valor !== '') {
      this.elements.cidade().select(valor, { force: true })
    }
  }

  preencherFormulario(dados) {
    this.anexarPdf(dados.pdf)
    this.anexarDocx(dados.docx)
    this.anexarJpg(dados.jpg)
    this.anexarXlsx(dados.xlsx)
    this.anexarTxt(dados.txt)
    this.selecionarPais(dados.pais)
    this.selecionarEstado(dados.estado)
    this.selecionarCidade(dados.cidade)
  }

  clicarEnviar() {
    this.elements.btnEnviar().click({ force: true })
  }

  validarMensagem(texto) {
    cy.contains(texto).should('be.visible')
  }

  validarBotaoAudioVisivel() {
    this.elements.btnAudio().should('be.visible')
  }

  validarVlibrasVisivel() {
    this.elements.avatarVlibras().should('exist')
  }
}

export default new Formulario3Page()