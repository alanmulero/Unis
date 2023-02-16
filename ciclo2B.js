/*Atividade ciclo 2 sobre a implementação de uma fila
e uma pilha em linguagem de programação.
No meu caso escolhi o javascript. */

// Declarando a fila ou  FIFO.


const fila = []; // Declarando a Fila.
console.log(`Total de itens dentro da Fila: => Fifo =  ${fila.length}`); // Verificando se a Fila esta vazia.
console.log('************************')
// Inserindo itens na Fila.
fila.push('U');
console.log(fila);
fila.push('n');
console.log(fila);
fila.push('i');
console.log(fila);
fila.push('s');
// Apresentando a lista.
console.log(fila);
// Criando um laço para ler a fila e ir tirando os elementos.

for (i = 0; i <= 3; i++) {
    let contador = i + 1;
    console.log(`Retirando a ${contador} letra da FILA.`);
     fila.shift();
     console.log(fila);

     
    
}

console.log(`Quantidade de elementos na Fila: ${fila.console}`);

// Exemplo com Pilha:
// Declarando a pilha.
console.log('****************************');
console.log('Exemplo com pilha:  LIFO');
var pilha = [];
pilha.push(1);
pilha.push(2);
pilha.push(3);

console.log(pilha);
// Retirando elementos:
pilha.pop();
console.log(pilha);
pilha.pop();
console.log(pilha);
pilha.pop();
console.log(pilha);


