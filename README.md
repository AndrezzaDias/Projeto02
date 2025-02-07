### Automação de Testes - Sauce Demo

Configuração do Ambiente 

 **Pré-requisitos**

Antes de iniciar, é necessário ter instalado:
- **[Node.js](https://nodejs.org/)** (versão 14+)
- **[Git](https://git-scm.com/)**
- **[Cypress](https://www.cypress.io/)**

**Clonar o Repositório**

```sh
git clone https://github.com/seu-usuario/projeto02.git
cd projeto02
```

**Instalar Dependências**

```sh
npm install
```

**Configurar Credenciais**

Para manter as credenciais protegidas, crie um arquivo **`cypress.env.json`** na raiz do projeto com os dados.

Isso evitará que os dados de login fiquem expostos no código.

---

### Executando os Testes 

**Abrir Cypress no modo interativo** 

Para executar os testes em modo gráfico:
```sh
npx cypress open
```

###  **Rodar os testes em modo headless** 
Para executar os testes diretamente no terminal:
```sh
npx cypress run
```
---

###  Estrutura do Projeto 
```
PROJETO02/
│
├── cypress/
│   ├── e2e/                # Testes automatizados
│   │   ├── login.cy.js      # Testes de Login
│   │   ├── products.cy.js   # Testes de Produtos
│   │   ├── cart.cy.js       # Testes de Carrinho
│   │   ├── checkout.cy.js   # Testes de Checkout
│   ├── fixtures/           # Dados de teste
│   │   └── users.json      # Usuários fictícios
│   ├── support/            # Arquivos de suporte
│   │   ├── commands.js     # Comandos customizados
│   │   └── pageObjects/    # Page Objects para organização dos testes
│   │       ├── loginPage.js
│   │       ├── productsPage.js
│   │       ├── cartPage.js
│   │       ├── checkoutPage.js
├── node_modules/           # Dependências instaladas
├── cypress.config.js       # Configuração do Cypress
├── package.json            # Gerenciador de dependências
├── package-lock.json       # Controle de versão das dependências
```


### Cenário de Teste Utilizado na Automação

**Testes de Login (`login.cy.js`)**
✅ Login com credenciais válidas  
❌ Tentativa de login com credenciais inválidas  

**Testes de Produtos (`products.cy.js`)**
📌 Verificar se a lista de produtos é exibida corretamente  

**Testes de Carrinho (`cart.cy.js`)**
🛒 Adicionar produto ao carrinho  
🗑️ Remover produto do carrinho  

**Testes de Checkout (`checkout.cy.js`)**
✅ Finalizar a compra com sucesso  

