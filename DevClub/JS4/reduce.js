/* REDUCE 
- Retorna um valor (pode ser um novo array, um objeto, number, string, etc..)
- Aceita 4 parâmetros:
    -acumulador (ITEM OBRIGATÓRIO)
    -valor atual (ITEM OBRIGATÓRIO)
    -index
    -array completo 
*/

/*const list = [1, 2, 3, 4, 5, 6, 7]

const sum = list.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
}, 0)

console.log(sum) */

// acumulador é uma variável que vamos adicionando valores dentro dela
//No reduce, precisamos sempre avisar qual é o valor inicial 

/* const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975,},
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn:1968},
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn:2004},
    { name: 'Spotify', marketValue:30, CEO: 'Daniel Ek', foundedOn:2006},
    { name: 'Apple', marketValue:845, CEO: 'Tim Cook', foundedOn:1976},
]

const marketValue = companies.reduce((acc, value) => {
    return acc + value.marketValue
}, 0)

console.log (marketValue)
*/
// pode-ser usar o reduce para um carrinho de compras para uma loja online, por exemplo.

const cart = [
    { productname: 'Abóbora', pricePerKg: 5, kg: 1},
    { productname: 'Pepino', pricePerKg: 3.55, kg: 1.3},
    { productname: 'Limão', pricePerKg: 1.2, kg: 2},
    { productname: 'Abacate', pricePerKg: 5.4, kg: 1.67},
    { productname: 'Morango', pricePerKg: 11.9, kg: 3},
]

const cartValue = cart.reduce ((acc,value) => {
    return acc + (value.pricePerKg * value.kg)
}, 0)
let finalResult = Math.round(cartValue*100)/100;

console.log(`A sua compra ficou no total de: ${finalResult}`)
