# 📌 Automação de Testes - Sauce Demo

## 📖 Introdução
Este projeto tem como objetivo automatizar testes para a aplicação **[Sauce Demo](https://www.saucedemo.com/)** utilizando o framework **Cypress**. Foram implementados testes para validar o fluxo de login, visualização de produtos, adição e remoção de itens no carrinho e finalização de compra.



## 🛠️ Configuração do Ambiente

### 1️⃣ **Pré-requisitos**
Antes de iniciar, é necessário ter instalado:
- **[Node.js](https://nodejs.org/)** (versão 14+)
- **[Git](https://git-scm.com/)**
- **[Cypress](https://www.cypress.io/)**

### 2️⃣ **Clonar o Repositório**
Abra o terminal e execute:
```sh
git clone https://github.com/seu-usuario/projeto02.git
cd projeto02
```

### 3️⃣ **Instalar Dependências**
No diretório do projeto, instale as dependências necessárias:
```sh
npm install
```

### 4️⃣ **Configurar Credenciais**
Para manter as credenciais protegidas, crie um arquivo **`cypress.env.json`** na raiz do projeto com os dados.

Isso evitará que os dados de login fiquem expostos no código.

---

## 🚀 Executando os Testes

### 📌 **Abrir Cypress no modo interativo**
Para executar os testes em modo gráfico:
```sh
npx cypress open
```
Esse comando abrirá a interface do Cypress, onde você pode selecionar e rodar os testes manualmente.

### 📌 **Rodar os testes em modo headless**
Para executar os testes diretamente no terminal:
```sh
npx cypress run
```
Esse comando executará todos os testes sem abrir a interface gráfica.

---

## 📂 Estrutura do Projeto
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


## 📌 Sobre os Testes Automatizados

### 🔹 **Testes de Login (`login.cy.js`)**
✅ Login com credenciais válidas  
❌ Tentativa de login com credenciais inválidas  

### 🔹 **Testes de Produtos (`products.cy.js`)**
📌 Verificar se a lista de produtos é exibida corretamente  

### 🔹 **Testes de Carrinho (`cart.cy.js`)**
🛒 Adicionar produto ao carrinho  
🗑️ Remover produto do carrinho  

### 🔹 **Testes de Checkout (`checkout.cy.js`)**
✅ Finalizar a compra com sucesso  

