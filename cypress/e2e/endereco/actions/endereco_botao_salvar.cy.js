describe('Validação do Botão Salvar', () => {

  beforeEach(() => {
    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/formulario-1.html');
  });

  it('Verificar se ao clicar em Salvar é feita a validação dos campos obrigatórios', () => {
    // Limpa todos os campos obrigatórios
    cy.get('#logradouro').clear();
    cy.get('#numero').clear();
    cy.get('#bairro').clear();
    cy.get('#cidade').clear();
    cy.get('#estado').clear();
    cy.get('#cep').clear();

    cy.contains('Salvar').click();

    // Espera que apareça a primeira mensagem de erro
    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Preencher corretamente o campo Logradouro, dúvida entrar em requisitos!');

    cy.get('.modal button').contains('OK').click();
  });

  it('Verificar se o botão Salvar exibe mensagem de sucesso quando todos os campos obrigatórios estão corretos', () => {
    // Preenche todos os campos obrigatórios corretamente
    cy.get('#logradouro').clear().type('Rua das Flores');
    cy.get('#numero').clear().type('123');
    cy.get('#complemento').clear().type('Apartamento 101'); // opcional
    cy.get('#bairro').clear().type('Centro');
    cy.get('#cidade').clear().type('São Paulo');
    cy.get('#estado').clear().type('SP');
    cy.get('#cep').clear().type('01001-000');

    cy.contains('Salvar').click();

    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Endereço cadastrado com sucesso!');

    cy.get('.modal button').contains('OK').click();
  });

  it('Verificar se não é possível salvar com campos obrigatórios vazios', () => {
    cy.get('#logradouro').clear();
    cy.get('#numero').clear();
    cy.get('#bairro').clear();
    cy.get('#cidade').clear();
    cy.get('#estado').clear();
    cy.get('#cep').clear();

    cy.contains('Salvar').click();

    cy.get('.modal').should('be.visible')
      .and('contain.text', 'Preencher corretamente o campo Logradouro, dúvida entrar em requisitos!');

    cy.get('.modal button').contains('OK').click();
  });

  it('Verificar se após salvar com sucesso os campos são limpos e desabilitados', () => {
    // Preenche e salva
    cy.get('#logradouro').clear().type('Rua das Flores');
    cy.get('#numero').clear().type('123');
    cy.get('#bairro').clear().type('Centro');
    cy.get('#cidade').clear().type('São Paulo');
    cy.get('#estado').clear().type('SP');
    cy.get('#cep').clear().type('01001-000');

    cy.contains('Salvar').click();

    cy.get('.modal button').contains('OK').click();

    // Campos devem estar limpos e desabilitados
    cy.get('#logradouro').should('have.value', '').and('be.disabled');
    cy.get('#numero').should('have.value', '').and('be.disabled');
    cy.get('#bairro').should('have.value', '').and('be.disabled');
    cy.get('#cidade').should('have.value', '').and('be.disabled');
    cy.get('#estado').should('have.value', '').and('be.disabled');
    cy.get('#cep').should('have.value', '').and('be.disabled');
  });

  it('Verificar se o botão Salvar fica desativado até o usuário clicar em Limpar Endereço', () => {
    cy.contains('Salvar').should('be.disabled');
    cy.contains('Limpar Endereço').click();
    cy.contains('Salvar').should('not.be.disabled');
  });

  it('Verificar se o endereço cadastrado é armazenado no localStorage', () => {
    // Preenche e salva
    cy.get('#logradouro').clear().type('Rua das Flores');
    cy.get('#numero').clear().type('123');
    cy.get('#bairro').clear().type('Centro');
    cy.get('#cidade').clear().type('São Paulo');
    cy.get('#estado').clear().type('SP');
    cy.get('#cep').clear().type('01001-000');

    cy.contains('Salvar').click();
    cy.get('.modal button').contains('OK').click();

    // Valida se o localStorage possui o cadastro
    cy.window().then(win => {
      const endereco = JSON.parse(win.localStorage.getItem('endereco'));
      expect(endereco).to.deep.equal({
        logradouro: 'Rua das Flores',
        numero: '123',
        complemento: '',
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '01001-000'
      });
    });
  });

});
