export function gerarMassaFormulario2(overrides = {}) {
  return {
    sexo: 'Masculino',
    interesses: ['Frontend'],
    dataNascimento: '2000-01-10',
    telefone: '92999998888',
    cpf: '52998224725',
    ...overrides
  }
}

export const massasFormulario2 = {
  valida: gerarMassaFormulario2(),

  sexoVazio: gerarMassaFormulario2({
    sexo: ''
  }),

  sexoFeminino: gerarMassaFormulario2({
    sexo: 'Feminino'
  }),

  interessesVazio: gerarMassaFormulario2({
    interesses: []
  }),

  interessesMultiplos: gerarMassaFormulario2({
    interesses: ['Frontend', 'Backend', 'QA']
  }),

  dataNascimentoVazia: gerarMassaFormulario2({
    dataNascimento: ''
  }),

  dataNascimentoFutura: gerarMassaFormulario2({
    dataNascimento: '2099-01-01'
  }),

  dataNascimentoMenorDe16: gerarMassaFormulario2({
    dataNascimento: '2012-01-01'
  }),

  telefoneVazio: gerarMassaFormulario2({
    telefone: ''
  }),

  telefoneComLetras: gerarMassaFormulario2({
    telefone: '92abc999999'
  }),

  telefoneComEspacos: gerarMassaFormulario2({
    telefone: '92 99999 9999'
  }),

  telefoneComMascara: gerarMassaFormulario2({
    telefone: '(92)99999-9999'
  }),

  telefoneMenorQue10: gerarMassaFormulario2({
    telefone: '123456789'
  }),

  telefoneMaiorQue11: gerarMassaFormulario2({
    telefone: '123456789012'
  }),

  cpfVazio: gerarMassaFormulario2({
    cpf: ''
  }),

  cpfComMascara: gerarMassaFormulario2({
    cpf: '529.982.247-25'
  }),

  cpfComLetras: gerarMassaFormulario2({
    cpf: '52998abc725'
  }),

  cpfComEspacos: gerarMassaFormulario2({
    cpf: '529 982 247 25'
  }),

  cpfMenorQue11: gerarMassaFormulario2({
    cpf: '1234567890'
  }),

  cpfMaiorQue11: gerarMassaFormulario2({
    cpf: '123456789012'
  }),

  cpfInvalido: gerarMassaFormulario2({
    cpf: '11111111111'
  })
}