// Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

const number1 = 44
const number2 = 20
const number3 = 30
 
if(number1 > number2 && number1 > number3) {
    console.log ("O primeiro número é o maior")
} else if (number2 > number3) {
    console.log ("O segundo número é o maior")
} else {
    console.log ("O terceiro é o maior")
}

if(number1 < number2 && number1 < number3) {
    console.log ("O primeiro número é o menor")
} else if (number2 < number3) {
    console.log ("O segundo número é o menor")
} else {
    console.log ("O terceiro é o menor")
}

