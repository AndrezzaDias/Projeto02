import LoginPage from '../support/pageObjects/loginPage'
import ProductsPage from '../support/pageObjects/productsPage'
import CartPage from '../support/pageObjects/cartPage'
import CheckoutPage from '../support/pageObjects/checkoutPage'

describe('Testes de Checkout', () => {
  const loginPage = new LoginPage()
  const productsPage = new ProductsPage()
  const cartPage = new CartPage()
  const checkoutPage = new CheckoutPage()

  beforeEach(() => {
    loginPage.login()
    productsPage.addFirstProductToCart()
    productsPage.openCart()
  })

  it('Deve finalizar a compra com sucesso', () => {
    cy.get('[data-test="checkout"]').click()
    checkoutPage.fillCheckoutForm('Andrezza', 'Dias', '12345')
    checkoutPage.submitCheckout()
    checkoutPage.getConfirmationMessage() // Verifica se a compra foi finalizada com sucesso
  })
})
