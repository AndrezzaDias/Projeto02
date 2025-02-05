class ProductsPage {
    // Obtém todos os itens listados no inventário
    getInventoryItems() {
      return cy.get('.inventory_item')
    }
    
    // Adiciona o primeiro produto da lista ao carrinho
    addFirstProductToCart() {
      cy.get('.inventory_item').first().find('button').click()
    }
  
    // Acessa o carrinho de compras
    openCart() {
      cy.get('.shopping_cart_link').click()
    }
  }
  
  export default ProductsPage
  