export function gerarMassaFormulario3(overrides = {}) {
  return {
    pdf: 'cypress/fixtures/arquivos/valido.pdf',
    docx: 'cypress/fixtures/arquivos/valido.docx',
    jpg: 'cypress/fixtures/arquivos/valido.jpg',
    xlsx: 'cypress/fixtures/arquivos/valido.xlsx',
    txt: 'cypress/fixtures/arquivos/valido.txt',
    pais: 'Brasil',
    estado: 'Amazonas',
    cidade: 'Manaus',
    ...overrides
  }
}

export const massasFormulario3 = {
  valida: gerarMassaFormulario3(),

  pdfInvalido: gerarMassaFormulario3({
    pdf: 'cypress/fixtures/arquivos/invalido.png'
  }),

  docxInvalido: gerarMassaFormulario3({
    docx: 'cypress/fixtures/arquivos/invalido.pdf'
  }),

  jpgInvalido: gerarMassaFormulario3({
    jpg: 'cypress/fixtures/arquivos/invalido.doc'
  }),

  xlsxInvalido: gerarMassaFormulario3({
    xlsx: 'cypress/fixtures/arquivos/invalido.csv'
  }),

  txtInvalido: gerarMassaFormulario3({
    txt: 'cypress/fixtures/arquivos/invalido.exe'
  }),

  paisVazio: gerarMassaFormulario3({
    pais: ''
  }),

  estadoVazio: gerarMassaFormulario3({
    estado: ''
  }),

  cidadeVazia: gerarMassaFormulario3({
    cidade: ''
  }),

  localizacaoVazia: gerarMassaFormulario3({
    pais: '',
    estado: '',
    cidade: ''
  })
}