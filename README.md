# QA Automation Project - E2E Testing with Cypress

- Sobre o Projeto

Este projeto tem como objetivo demonstrar a implementação de testes automatizados end-to-end (E2E) utilizando **Cypress**, simulando fluxos reais de uma aplicação web.

O foco está na validação funcional de cenários críticos de usuário, aplicando boas práticas de automação, organização de código e estrutura escalável.

-Objetivos

- Implementar testes automatizados E2E com Cypress  
- Validar fluxos reais de usuário (cadastro, login e formulários)  
- Cobrir cenários positivos e negativos  
- Aplicar boas práticas de QA e automação de testes  
- Estruturar um projeto organizado e escalável  
- Simular contexto de testes próximo ao ambiente profissional  

- Tecnologias Utilizadas

- Cypress  
- JavaScript (ES6+)  
- Node.js  
- Visual Studio Code  
- Git / GitHub  

-Estrutura do Projeto

O projeto foi organizado para facilitar manutenção, escalabilidade e separação de responsabilidades:


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
