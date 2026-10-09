// =====================================================
// Introdução ao JavaScript - Desafios práticos
// Execute com: node app.js  (ou cole no console do navegador)
// =====================================================

'use strict';

const titulo = (texto) => console.log(`\n===== ${texto} =====`);

// =====================================================
// BLOCO 1 - FUNDAMENTOS E VARIÁVEIS
// =====================================================
titulo('BLOCO 1 - Fundamentos e Variáveis');

// 1.1 let: valor inicial + soma de 10 na linha seguinte
console.log('\n-- 1.1 Variável let --');
let pontos = 50;
pontos += 10; // equivale a pontos = pontos + 10
console.log('Pontos:', pontos); // 60

// 1.2 const: tentativa de reatribuição gera TypeError
console.log('\n-- 1.2 Constante e TypeError --');
const MAX_PONTOS = 100;
try {
  MAX_PONTOS = 200; // erro!
} catch (erro) {
  console.log(`Erro capturado: ${erro.name} -> ${erro.message}`);
  console.log(
    'Motivo: variáveis declaradas com const não podem ser reatribuídas. ' +
      'O identificador fica "preso" ao valor inicial; por isso o JS lança um TypeError.'
  );
}
console.log('MAX_PONTOS continua valendo:', MAX_PONTOS);

// 1.3 Um exemplo de cada tipo primitivo + typeof
console.log('\n-- 1.3 Tipos primitivos e typeof --');
const texto = 'Olá, JavaScript';
const numero = 42;
const verdadeiro = true;
let indefinido; // sem valor atribuído -> undefined
const nulo = null;

console.log(`texto      = ${texto} -> typeof: ${typeof texto}`);
console.log(`numero     = ${numero} -> typeof: ${typeof numero}`);
console.log(`verdadeiro = ${verdadeiro} -> typeof: ${typeof verdadeiro}`);
console.log(`indefinido = ${indefinido} -> typeof: ${typeof indefinido}`);
// Curiosidade: typeof null retorna "object" (bug histórico da linguagem)
console.log(`nulo       = ${nulo} -> typeof: ${typeof nulo} (bug histórico: null é primitivo!)`);

// 1.4 Template Literals vs concatenação
console.log('\n-- 1.4 Template literals vs concatenação --');
const nome = 'Maria';
const idade = 25;

const fraseTemplate = `Meu nome é ${nome} e eu tenho ${idade} anos.`;
const fraseConcatenada = 'Meu nome é ' + nome + ' e eu tenho ' + idade + ' anos.';

console.log('Template literal:', fraseTemplate);
console.log('Concatenação    :', fraseConcatenada);
console.log('São iguais?', fraseTemplate === fraseConcatenada);

// =====================================================
// BLOCO 2 - FUNÇÕES
// =====================================================
titulo('BLOCO 2 - Funções');

// 2.1 Função declarada: chamada ANTES da declaração (hoisting)
console.log('\n-- 2.1 Função declarada e hoisting --');
console.log('ehMaiorDeIdade(20):', ehMaiorDeIdade(20)); // funciona graças ao hoisting
console.log('ehMaiorDeIdade(15):', ehMaiorDeIdade(15));

function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

// 2.2 Função de expressão: chamada ANTES da declaração -> ReferenceError
console.log('\n-- 2.2 Função de expressão e ReferenceError --');
try {
  console.log(ehMaiorDeIdadeExpressao(20)); // erro!
} catch (erro) {
  console.log(`Erro capturado: ${erro.name} -> ${erro.message}`);
  console.log(
    'Motivo: const/let sofrem hoisting, mas ficam na "zona morta temporal" até a linha da declaração.'
  );
}

const ehMaiorDeIdadeExpressao = function (idade) {
  return idade >= 18;
};

console.log('Depois da declaração:', ehMaiorDeIdadeExpressao(20)); // true

// 2.3 Função dobro nas três formas
console.log('\n-- 2.3 dobro: declarada, expressão e arrow --');

function dobroDeclarada(n) {
  return n * 2;
}

const dobroExpressao = function (n) {
  return n * 2;
};

const dobroArrow = (n) => n * 2; // forma curta: retorno implícito

console.log('dobroDeclarada(4):', dobroDeclarada(4));
console.log('dobroExpressao(4):', dobroExpressao(4));
console.log('dobroArrow(4)    :', dobroArrow(4));

// 2.4 Parâmetro com valor padrão
console.log('\n-- 2.4 Parâmetro com valor padrão --');
const dobroPadrao = (n = 1) => n * 2;

console.log('dobroPadrao(5):', dobroPadrao(5));
console.log('dobroPadrao() :', dobroPadrao()); // usa n = 1 -> 2

// =====================================================
// BLOCO 3 - CONTROLE DE FLUXO
// =====================================================
titulo('BLOCO 3 - Controle de Fluxo');

// 3.1 classificarNota com if/else
console.log('\n-- 3.1 classificarNota --');
function classificarNota(nota) {
  if (nota >= 6) {
    return 'Aprovado';
  } else {
    return 'Reprovado';
  }
}
console.log('Nota 8   ->', classificarNota(8));
console.log('Nota 6   ->', classificarNota(6));
console.log('Nota 4.5 ->', classificarNota(4.5));

// 3.2 Semáforo com switch
console.log('\n-- 3.2 Semáforo (switch) --');
const corSemaforo = 'amarelo'; // experimente: 'vermelho', 'amarelo', 'verde'

switch (corSemaforo) {
  case 'vermelho':
    console.log('Pare');
    break;
  case 'amarelo':
    console.log('Atenção');
    break;
  case 'verde':
    console.log('Siga');
    break;
  default:
    console.log('Cor inválida');
}

// 3.3 Tabuada do 5 com for
console.log('\n-- 3.3 Tabuada do 5 (for) --');
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 3.4 Contagem regressiva com while
console.log('\n-- 3.4 Contagem regressiva (while) --');
let contagem = 5;
while (contagem >= 1) {
  console.log(contagem);
  contagem--;
}
console.log('Fim!');

// 3.5 Par ou ímpar de 1 a 20: for e while
console.log('\n-- 3.5a Par ou ímpar (for) --');
for (let n = 1; n <= 20; n++) {
  console.log(`${n} é ${n % 2 === 0 ? 'par' : 'ímpar'}`);
}

console.log('\n-- 3.5b Par ou ímpar (while) --');
let k = 1;
while (k <= 20) {
  console.log(`${k} é ${k % 2 === 0 ? 'par' : 'ímpar'}`);
  k++;
}

// 3.6 diaDaSemana com switch e default
console.log('\n-- 3.6 diaDaSemana --');
function diaDaSemana(numero) {
  switch (numero) {
    case 1:
      return 'Domingo';
    case 2:
      return 'Segunda-feira';
    case 3:
      return 'Terça-feira';
    case 4:
      return 'Quarta-feira';
    case 5:
      return 'Quinta-feira';
    case 6:
      return 'Sexta-feira';
    case 7:
      return 'Sábado';
    default:
      return 'Número inválido (use de 1 a 7)';
  }
}

for (const num of [1, 4, 7, 0, 9]) {
  console.log(`diaDaSemana(${num}) -> ${diaDaSemana(num)}`);
}
