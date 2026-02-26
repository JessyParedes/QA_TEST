class EnderecoPage {
  elements = {
    logradouro: () => cy.get('#logradouro'),
    numero: () => cy.get('#numero'),
    complemento: () => cy.get('#complemento'),
    bairro: () => cy.get('#bairro'),
    cidade: () => cy.get('#cidade'),
    estado: () => cy.get('#estado'),
    cep: () => cy.get('#cep'),
    salvar: () => cy.contains('button, input, a', 'Salvar'),
    modalSucesso: () => cy.contains('Endereço cadastrado com sucesso!'),
  }

  visit(url = 'https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/formulario-1.html') {
    return cy.visit(url)
  }

  fillLogradouro(value) {
    return this.elements.logradouro().clear().type(value)
  }

  fillNumero(value) {
    return this.elements.numero().clear().type(value)
  }

  fillComplemento(value) {
    // complemento costuma ser opcional
    const el = this.elements.complemento().clear()
    if (value === '' || value == null) return el
    return el.type(value)
  }

  fillBairro(value) {
    return this.elements.bairro().clear().type(value)
  }

  fillCidade(value) {
    return this.elements.cidade().clear().type(value)
  }

  fillEstado(value) {
    // garante caixa alta se necessário
    const estado = (value ?? '').toString().toUpperCase()
    const el = this.elements.estado().clear()
    if (!estado) return el
    return el.type(estado)
  }

  fillCep(value) {
    // aceita "12345678" ou "12345-678" (o app mascara)
    const cep = (value ?? '').toString().replace(/\D/g, '')
    const el = this.elements.cep().clear()
    if (!cep) return el
    return el.type(cep)
  }

  fillForm(endereco) {
    this.fillLogradouro(endereco.logradouro)
    this.fillNumero(endereco.numero)
    this.fillComplemento(endereco.complemento)
    this.fillBairro(endereco.bairro)
    this.fillCidade(endereco.cidade)
    this.fillEstado(endereco.estado)
    this.fillCep(endereco.cep)
  }

  salvar() {
    return this.elements.salvar().click()
  }

  cadastrarEndereco(endereco) {
    this.fillForm(endereco)
    return this.salvar()
  }

  shouldShowSuccessModal() {
    return this.elements.modalSucesso().should('be.visible')
  }

  shouldFieldsBeDisabled() {
    this.elements.logradouro().should('be.disabled')
    this.elements.numero().should('be.disabled')
    this.elements.bairro().should('be.disabled')
    this.elements.cidade().should('be.disabled')
    this.elements.estado().should('be.disabled')
    this.elements.cep().should('be.disabled')
    return this
  }

  shouldSalvarBeDisabled() {
    return this.elements.salvar().should('be.disabled')
  }

  shouldHaveLocalStorageEndereco(expected) {
    return cy.window().then((win) => {
      const saved = JSON.parse(win.localStorage.getItem('endereco'))
      expect(saved).to.deep.equal(expected)
    })
  }
}

export default new EnderecoPage()