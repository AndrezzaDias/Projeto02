Feature: Login no sistema

  Scenario: Usuário loga com credenciais válidas
    Given que eu estou na página de login
    When eu faço login com usuário válido
    Then eu sou redirecionado para a página de produtos

  Scenario: Usuário tenta logar com credenciais inválidas
    Given que eu estou na página de login
    When eu faço login com usuário inválido
    Then eu vejo a mensagem de erro "Epic sadface: Username and password do not match any user in this service"