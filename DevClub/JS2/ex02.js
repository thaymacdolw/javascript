// Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

const table =  (number) => {
    if (number >10 || number < 1 ){
        console.log("Aceitamos SOMENTE números entre  1 e 10")
        return //pra funcão parar de executar automaticamente após aparecer uma vez na tela
    }

    for(let i = 1; i <=10; i++) {
        console.log(`${i} x ${number} = ${i * number}`)
    }
}

table(9)