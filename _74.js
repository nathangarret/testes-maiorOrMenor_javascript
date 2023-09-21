const entrada = require('prompt-sync')({ sigint: true })

/* 
Escreva um algoritmo que imprima as seguintes seqüências de números: (1, 1 2 3 4 5 6 7 8 9 10) 
(2, 1 2 3 4 5 6 7 8 9 10) (3, 1 2 3 4 5 6 7 8 9 10) (4, 1 2 3 4 5 6 7 8 9 10) e assim sucessivamente, até 
que o primeiro número (antes da vírgula), também chegue a 10. 
*/

function desenharRetangulo() {
    const largura = 60;
    const altura = 10;
  
    for (let linha = 1; linha <= altura; linha++) {
      let linhaString = '';
      for (let coluna = 1; coluna <= largura; coluna++) {
        if (linha === 1 || linha === altura || coluna === 1 || coluna === largura) {
          linhaString += '+';
        } else {
          linhaString += ' ';
        }
      }
      console.log(linhaString);
    }
  }
  
  desenharRetangulo();

/* for (let j = 1; j < 5; j++) {
    console.log(`${j}, `);
    for (let i = 1; i < 11; i++) {
        console.log(`${i}`);
    }
} */