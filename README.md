# QA Automation Project

## Descrição do Projeto

Este projeto tem como objetivo demonstrar a aplicação de boas práticas em automação de testes utilizando Cypress. A proposta é simular cenários reais de validação de aplicações web, com foco em testes end-to-end (E2E) e validações funcionais.

A estrutura foi planejada para garantir organização, legibilidade e escalabilidade, seguindo padrões utilizados em projetos profissionais de QA.

---

## Objetivos

* Desenvolver testes automatizados E2E
* Validar fluxos funcionais de formulários
* Cobrir cenários positivos e negativos
* Melhorar a organização e manutenção dos testes
* Aplicar boas práticas utilizadas em projetos reais de qualidade de software

---

## Tecnologias Utilizadas

* Cypress
* JavaScript (ES6+)
* Node.js
* Visual Studio Code

---

## Estrutura do Projeto

O projeto está organizado para separar responsabilidades e facilitar a manutenção:

* `cypress/e2e`: cenários de teste
* `cypress/pages`: abstração das páginas (Page Objects)
* `cypress/fixtures`: massa de dados para testes
* `cypress/support`: configurações e comandos customizados

---

## Como Executar o Projeto

### Pré-requisitos

* Node.js instalado

### Instalação

```bash
npm install
```

### Execução dos testes

```bash
npx cypress open
```

ou em modo headless:

```bash
npx cypress run
```

---

## Cenários Cobertos

* Cadastro de usuário com dados válidos
* Validação de campos obrigatórios
* Tentativas de cadastro com dados inválidos
* Fluxos de login com sucesso e falha
* Validações de mensagens de erro

---

## Boas Práticas Adotadas

* Separação de responsabilidades (testes, páginas e dados)
* Reutilização de código com Page Object Model (POM)
* Organização dos testes por funcionalidade
* Uso de massa de dados para múltiplos cenários
* Escrita de testes claros e de fácil manutenção
* Estrutura preparada para evolução e escalabilidade

---

## Possíveis Melhorias

* Integração com pipeline de CI/CD utilizando GitHub Actions
* Geração de relatórios de execução de testes
* Execução paralela dos testes
* Integração com ferramentas de análise de qualidade

---

## Autoria

Jessy Muro

Projeto desenvolvido com foco em aprendizado contínuo e evolução em automação de testes.
