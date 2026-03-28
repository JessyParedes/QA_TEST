class Formulario2Page {
  elements = {
    sexoMasculino: () => cy.get(':nth-child(2) > [name="sexo"]'),
    sexoFeminino: () => cy.get(':nth-child(3) > [name="sexo"]'),

    interesseFrontend: () => cy.get('#frontend'),
    interesseBackend: () => cy.get('#backend'),
    interesseQa: () => cy.get('#qa'),

    dataNascimento: () => cy.get('#dataNascimento'),
    telefone: () => cy.get('#telefone'),
    cpf: () => cy.get('#cpf'),

    btnEnviar: () => cy.get('[type="submit"]')
  }

  visit() {
    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/formulario-2.html')
  }

  selecionarSexo(sexo) {
    if (!sexo) return

    if (sexo === 'Masculino') {
      this.elements.sexoMasculino().check({ force: true })
    }

    if (sexo === 'Feminino') {
      this.elements.sexoFeminino().check({ force: true })
    }
  }

  selecionarInteresses(interesses = []) {
    if (!interesses.length) return

    interesses.forEach((interesse) => {
      if (interesse === 'Frontend') {
        this.elements.interesseFrontend().check({ force: true })
      }

      if (interesse === 'Backend') {
        this.elements.interesseBackend().check({ force: true })
      }

      if (interesse === 'QA') {
        this.elements.interesseQa().check({ force: true })
      }
    })
  }

  preencherDataNascimento(data) {
    this.elements.dataNascimento().clear()

    if (data) {
      this.elements.dataNascimento().type(data, { force: true })
    }
  }

  preencherTelefone(telefone) {
    this.elements.telefone().clear()

    if (telefone !== '') {
      this.elements.telefone().type(telefone, { force: true })
    }
  }

  preencherCpf(cpf) {
    this.elements.cpf().clear()

    if (cpf !== '') {
      this.elements.cpf().type(cpf, { force: true })
    }
  }

  preencherFormulario(dados) {
    this.selecionarSexo(dados.sexo)
    this.selecionarInteresses(dados.interesses)
    this.preencherDataNascimento(dados.dataNascimento)
    this.preencherTelefone(dados.telefone)
    this.preencherCpf(dados.cpf)
  }

  clicarEnviar() {
    this.elements.btnEnviar().click({ force: true })
  }

  validarMensagem(texto) {
    cy.contains(texto).should('be.visible')
  }
}

export default new Formulario2Page()