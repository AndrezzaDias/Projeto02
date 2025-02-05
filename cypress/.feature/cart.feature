Feature: Carrinho de compras

  Scenario: Adicionar produto ao carrinho
  
    Given que eu estou logado
    When eu adiciono o primeiro produto ao carrinho
    Then o carrinho deve ter 1 produto

  Scenario: Remover produto do carrinho

    Given que eu estou logado e com um produto no carrinho
    When eu removo o produto do carrinho
    Then o carrinho deve estar vazio
