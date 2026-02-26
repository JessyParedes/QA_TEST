import EnderecoPage from '../../../support/pages/EnderecoPage'

describe('Cadastro de Endereço', () => {
  it('Deve cadastrar endereço com sucesso', () => {
    const endereco = {
      logradouro: 'Rua das Flores',
      numero: '123',
      complemento: 'Apartamento 45',
      bairro: 'Jardim América',
      cidade: 'São Paulo',
      estado: 'sp',      // pode vir minúsculo que o Page Object normaliza
      cep: '12345678',   // sem máscara
    }

    EnderecoPage.visit()
    EnderecoPage.cadastrarEndereco(endereco)

    EnderecoPage.shouldShowSuccessModal()
    EnderecoPage.shouldFieldsBeDisabled()
    EnderecoPage.shouldSalvarBeDisabled()

    // Opcional: localStorage (ajuste a máscara conforme o comportamento real do app)
    EnderecoPage.shouldHaveLocalStorageEndereco({
      logradouro: 'Rua das Flores',
      numero: '123',
      complemento: 'Apartamento 45',
      bairro: 'Jardim América',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '12345-678',
    })
  })
})