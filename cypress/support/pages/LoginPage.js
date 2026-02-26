class LoginPage {
  elements = {
    email: () => cy.get('[data-cy="email"]'),
    password: () => cy.get('[data-cy="password"]'),
    submit: () => cy.get('[data-cy="login-submit"]'),
    error: () => cy.get('[data-cy="login-error"]'),
  }

  visit() {
    cy.visit('/login')
  }

  fillEmail(value) {
    this.elements.email().clear().type(value)
  }

  fillPassword(value) {
    this.elements.password().clear().type(value, { log: false })
  }

  submit() {
    this.elements.submit().click()
  }

  login(email, password) {
    this.fillEmail(email)
    this.fillPassword(password)
    this.submit()
  }
}

export default new LoginPage()