describe('Cadastro de Endereço', () => {
  it('Deve cadastrar endereço com sucesso', () => {
    cy.visit('https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/formulario-1.html');

    cy.get('#logradouro').type('Rua das Flores');
    cy.get('#numero').type('123');
    cy.get('#complemento').type('Apartamento 45');
    cy.get('#bairro').type('Jardim América');
    cy.get('#cidade').type('São Paulo');
    cy.get('#estado').type('SP'); // Cypress deve lidar com caixa alta se necessário
    cy.get('#cep').type('12345678'); // Sem máscara para digitação, o sistema deve aplicar automaticamente

     // Clica no botão Salvar
    cy.contains('Salvar').click();

    // Verifica se o modal de sucesso apareceu com a mensagem correta
    cy.contains('Endereço cadastrado com sucesso!').should('be.visible');

    // Verifica se os campos foram desabilitados após salvar
    cy.get('#logradouro').should('be.disabled');
    cy.get('#numero').should('be.disabled');
    cy.get('#bairro').should('be.disabled');
    cy.get('#cidade').should('be.disabled');
    cy.get('#estado').should('be.disabled');
    cy.get('#cep').should('be.disabled');

    // Verifica se o botão Salvar foi desabilitado
    cy.contains('Salvar').should('be.disabled');

    // Opcional: verificar se o endereço foi salvo no localStorage
    cy.window().then(win => {
      const enderecoSalvo = JSON.parse(win.localStorage.getItem('endereco'));
      expect(enderecoSalvo).to.deep.equal({
        logradouro: 'Rua das Flores',
        numero: '123',
        complemento: 'Apartamento 45',
        bairro: 'Jardim América',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '12345-678' // Se a máscara for aplicada no localStorage
      });
    });
  });
});
