class CadastroPage {
  elements = {
    nome: () => cy.get('#nome'),
    email: () => cy.get('#email'),
    senha: () => cy.get('#senha'),
    confirmarSenha: () => cy.get('#confirmarSenha'),
    submit: () => cy.contains('button', 'Cadastrar'),
  }

  visit(
  url = 'https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/cadastro.html'
) {
  return cy.visit(url)
}

  fillNome(value) {
  return this.elements.nome().clear().type(value)
}

fillEmail(value) {
  const el = this.elements.email().clear()
  if (value === '' || value == null) return el
  return el.type(value, { log: false })
}

fillSenha(value) {
  return this.elements.senha().clear().type(value, { log: false })
}

fillConfirmarSenha(value) {
  return this.elements.confirmarSenha().clear().type(value, { log: false })

  }

  fillForm(usuario) {
    this.fillNome(usuario.nome)
    this.fillEmail(usuario.email)
    this.fillSenha(usuario.senha)
    this.fillConfirmarSenha(usuario.confirmarSenha)
  }

  clickSubmit() {
    return this.elements.submit().click()
  }

  cadastrar(usuario) {
    this.fillForm(usuario)
    return this.clickSubmit()
  }

  modal = {
    title: () => cy.contains('Erro no Cadastro'),
    ok: () => cy.contains('button', 'OK'),
  }

  shouldShowError() {
    return this.modal.title().should('be.visible')
  }

  closeModal() {
    return this.modal.ok().click()
  }
}

export default new CadastroPage()