class CartPage {
    removeProduct() {
      cy.get('.cart_button').click() // Remove um produto do carrinho
    }
  
    getCartBadge() {
      return cy.get('.shopping_cart_badge') // Obtém o indicador de quantidade no carrinho
    }
  }
  
  export default CartPage;
  