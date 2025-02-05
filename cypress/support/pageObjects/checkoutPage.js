class CheckoutPage {
    fillCheckoutForm(firstName, lastName, postalCode) { // Preenche o formulário de checkout com os dados do usuário
      cy.get('[data-test="firstName"]').type(firstName)
      cy.get('[data-test="lastName"]').type(lastName)
      cy.get('[data-test="postalCode"]').type(postalCode)
    }
  
    submitCheckout() {
      cy.get('[data-test="continue"]').click() // Conclui o processo de checkout
      cy.get('[data-test="finish"]').click()
    }
  
    getConfirmationMessage() { // Verifica se a mensagem de confirmação da compra aparece corretamente
      return cy.get('.complete-header').should('have.text', 'Thank you for your order!')
    }
  }
  
  export default CheckoutPage;
  