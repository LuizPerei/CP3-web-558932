const botaocalcular = document.getElementById('botao-calcular');
const outputDiv = document.getElementById('output');
const mediaTd = document.getElementById('media');
const situacaoTd = document.getElementById('situacao');

botaocalcular.addEventListener('click', () => {
  const aluno = prompt('Digite o nome do aluno:');
  const nota1 = parseFloat(prompt(`Digite a primeira nota do aluno ${aluno}:`));
  const nota2 = parseFloat(prompt(`Digite a segunda nota do aluno ${aluno}:`));

  const media = (nota1 + nota2) / 2;
  let situacao;

  if (media >= 7) {
    situacao = 'Aprovado';
  } else if (media >= 4) {
    situacao = 'Recuperação';
  } else {
    situacao = 'Reprovado';
  }

  mediaTd.textContent = media.toFixed(2);
  situacaoTd.textContent = situacao;
  outputDiv.style.display = 'block';
});