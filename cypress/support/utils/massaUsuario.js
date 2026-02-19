import { fakerPT_BR as faker } from '@faker-js/faker';
import { gerarSenhaValida } from './senha';

export function gerarPayloadBase() {
  const senha = gerarSenhaValida();

  return {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    senha,
    confirmarSenha: senha
  };
}
