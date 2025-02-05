class LoginPage {
  visit() {
    cy.visit('/') // Acessa a página inicial utilizando a URL base definida no `cypress.config.js`
  }

  // Preenche o formulário de login com usuário e senha
  fillLoginForm(username, password) {
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
  }

  // Submete o formulário de login
  submitLogin() {
    cy.get('[data-test="login-button"]').click()
  }

  // Captura e retorna a mensagem de erro caso o login falhe  
  getErrorMessage() {
    return cy.get('[data-test="error"]') 
  }

  login() {
    const username = Cypress.env('username') // Obtém do `cypress.env.json`
    const password = Cypress.env('password')
    this.visit();
    this.fillLoginForm(username, password)
    this.submitLogin()
  }
}

export default LoginPage
