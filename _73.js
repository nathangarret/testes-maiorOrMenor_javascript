const entrada = require('prompt-sync') ({sigint:true})

/* 
73) A prefeitura de uma cidade deseja fazer uma pesquisa entre seus habitantes. Faça um algoritmos 
para coletar dados sobre o salário e número de filhos de cada habitante e após as leituras, escrever: 
a) Média de salário da população 
b) Média do número de filhos 
c) Maior salário dos habitantes 
d) Percentual de pessoas com salário menor que R$ 150,00 
Obs.: O final da leituras dos dados se dará com a entrada de um “salário negativo”.
 */

// Inicialize as variáveis
let somaSalarios = 0;
let somaFilhos = 0;
let maiorSalario = 0;
let quantidadePessoasMenor150 = 0;
let quantidadePessoas = 0;

// Função para ler dados de uma pessoa
function lerDadosPessoa() {
  const salario = parseFloat(entrada("Informe o salário da pessoa (ou digite um valor negativo para encerrar):"));
  
  // Verifique se o salário é negativo para encerrar a entrada de dados
  if (salario < 0) {
    return false; // Sinaliza o fim da entrada de dados
  }
  
  const numFilhos = parseInt(entrada("Informe o número de filhos da pessoa:"));
  
  // Atualize as variáveis com os dados da pessoa
  somaSalarios += salario;
  somaFilhos += numFilhos;
  
  if (salario > maiorSalario) {
    maiorSalario = salario;
  }
  
  if (salario < 150) {
    quantidadePessoasMenor150++;
  }
  
  quantidadePessoas++;
  
  return true; // Continua a entrada de dados
}

// Loop para ler dados das pessoas
while (lerDadosPessoa()) {}

// Calcule a média de salário da população
const mediaSalario = somaSalarios / quantidadePessoas;

// Calcule a média do número de filhos
const mediaFilhos = somaFilhos / quantidadePessoas;

// Calcule o percentual de pessoas com salário menor que R$ 150,00
const percentualMenor150 = (quantidadePessoasMenor150 / quantidadePessoas) * 100;

// Imprima os resultados
console.log("Média de salário da população: " + mediaSalario.toFixed(2));
console.log("Média do número de filhos: " + mediaFilhos.toFixed(2));
console.log("Maior salário dos habitantes: " + maiorSalario.toFixed(2));
console.log("Percentual de pessoas com salário menor que R$ 150,00: " + percentualMenor150.toFixed(2) + "%");