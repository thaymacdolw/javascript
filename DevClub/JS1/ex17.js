// Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.


const randomNumber = Math.floor(Math.random() * (10 - 1) +1);
const winningNumber = Math.floor(Math.random() * (10 - 1) +1); 

console.log(randomNumber, ": Random Number")
console.log(winningNumber, ": Winning Number")


if (randomNumber == winningNumber) {
    console.log('You are the winner')
} else {
    console.log('You are not the winner')
}