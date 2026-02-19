// senha.js
export function gerarSenhaValida() {
  const numero = '1';
  const maiuscula = 'A';
  const especial = '@';
  const restante = 'abcde';

  // Garante mínimo 6 e máximo 12 caracteres, com número, maiúscula e especial
  return (maiuscula + restante + numero + especial).slice(0, 12);
}
