Feature: Checkout

  Scenario: Finalizar compra com sucesso
    Given que eu estou logado e com um produto no carrinho
    When eu finalizo a compra com nome "Andrezza", sobrenome "Dias" e código postal "12345"
    Then eu vejo a mensagem "Thank you for your order!"
