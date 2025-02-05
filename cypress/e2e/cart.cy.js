import LoginPage from '../support/pageObjects/loginPage';
import ProductsPage from '../support/pageObjects/productsPage';
import CartPage from '../support/pageObjects/cartPage';

describe('Testes de Carrinho', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();
  const cartPage = new CartPage();

  beforeEach(() => {
    loginPage.login();
  });

  it('Deve adicionar um produto ao carrinho', () => {
    productsPage.addFirstProductToCart();
    productsPage.openCart();
    cartPage.getCartBadge().should('have.text', '1');  // Verifica se o carrinho mostra 1 item
  });

  it('Deve remover um produto do carrinho', () => {
    productsPage.addFirstProductToCart();
    productsPage.openCart();
    cartPage.removeProduct();
    cartPage.getCartBadge().should('not.exist'); // Verifica se o carrinho está vazio
  });
});
