Feature: Visualização de produtos

  Scenario: Exibição de produtos corretamente
  
    Given que eu estou logado
    When eu visualizo a lista de produtos
    Then eu vejo 6 produtos na página
