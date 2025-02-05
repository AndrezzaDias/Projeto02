import LoginPage from '../support/pageObjects/loginPage'

describe('Testes de Login', () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.visit() // Sempre inicia na página de login
  })

  it('Deve logar com usuário válido', () => {
    loginPage.login(); // Usa credenciais do `cypress.env.json`
    cy.url().should('include', '/inventory.html') // Verifica se foi para a página de produtos
  })

  it('Não deve logar com usuário inválido', () => {
    loginPage.fillLoginForm('usuario_invalido', 'senha_errada') // Insere credenciais inválidas
    loginPage.submitLogin()

    // Verifica se a mensagem de erro aparece corretamente
    loginPage.getErrorMessage()
      .should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service')
  })
})
