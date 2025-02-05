import LoginPage from '../support/pageObjects/loginPage';
import ProductsPage from '../support/pageObjects/productsPage';

describe('Testes de Produtos', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();

  beforeEach(() => {
    loginPage.login();
  });

  it('Deve exibir os produtos corretamente', () => {
    productsPage.getInventoryItems().should('have.length', 6);
  });
});
