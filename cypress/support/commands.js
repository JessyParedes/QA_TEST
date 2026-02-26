import LoginPage from './pages/LoginPage'
import CadastroPage from './pages/CadastroPage'

// UI login (pela interface)
Cypress.Commands.add('loginUI', (email, senha) => {
  return LoginPage.visit().then(() => {
    LoginPage.login(email, senha)
  })
})

// Cadastro pela UI
Cypress.Commands.add('cadastrarUI', (usuario) => {
  CadastroPage.visit()
  CadastroPage.cadastrar(usuario)
})