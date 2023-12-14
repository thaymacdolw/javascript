// MATERIAL MÉTODOS DE ARRAY https://devclub.notion.site/M-todos-de-Array-s-eb7bb6752b694c39bf555887750160be


/* 
    Arrays
        -push: Adiciona mais um item ao array
        -lenght: Mostra o tamanho do array 
        -sort: organiza o array
        -delete: Deleta um item do array. O item é deletado, mas o espaço fica vazio. Retornando undefined.
        -Every: Esse método testa se todos os elementos do Array passam em uma condição. Passamos uma função que retorna true ou false. Se todos os retornos forem true, significa que todos os elementos passaram no teste, e a função retornará true. Se algum item não estiver de acordo, ele retornará false.
        -some:faz algo parecido com o .every(). A diferença é que o .every() só retorna true se todos os elementos passarem no teste. O .some() retorna true se pelo menos um elemento do Array passar no teste.
        -fill: Preenche posições do array como desejarmos
        -find: Usamos esse método quando queremos encontrar algum elemento dentro no Array. Para isso, passamos uma função que irá retornar true ou false. O primeiro true que for retornado irá finalizar a função e retornar o elemento em que estamos.
        -findIndex: Faz o mesmo que o .find(), mas retorna o índice do elemento encontrado ao invés de retornar o próprio elemento.
        -concat - Esse método é usado para juntar dois arrays. Ele não altera os arrays originais, mas cria um novo array com a soma dos dois arrays escolhidos.
        -includes - Esse método nos diz se há ou não um determinado item no array. Retorna true ou false.
        -join - O método join() junta todos os elementos de um array.
        -slice - O método slice() retorna um novo array, apenas com as informações escolhidas
        -splice - Esse metódo remove ou adiciona elementos em um array em uma posição específica.
        -pop - Remove o último elemento de um array.
        -shift - Remove o primeiro elemento de um array.

*/
/* push
const myArray = [1, 2, 3]
myArray.push(4)
console.log(myArray) */

/* lenght
const myArray = [1, 2, 3]

console.log(myArray.length) */

/* sort
const myArray = ['limão', 'abóbora', 'caqui']

myArray.sort()
console.log(myArray) */

/* delete
const myArray = ['limão', 'abóbora', 'caqui']

delete myArray[0]// posição onde está o limão fica vazia

console.log(myArray) */


/* Every 
const users = [
    {name: 'Nico', credit:600},
    {name: 'Maria', credit:900},
    {name: 'Joana', credit:300},
    {name: 'Vanessa', credit:200}
]
const isTrue = users.every ( user => user.credit > 500)

console.log(isTrue) */

/* Some
const users = [
    {name: 'Nico', credit:600},
    {name: 'Maria', credit:900},
    {name: 'Joana', credit:300},
    {name: 'Vanessa', credit:200}
]
const isTrue = users.some ( user => user.credit > 800)

console.log(isTrue) */

/* Fill
const numbers=[1,2,3,4]
numbers.fill(6, 0, 2)
console.log(numbers) */


/* FINDINDEX
const users = [
    {name: 'Nico', credit:600},
    {name: 'Maria', credit:900},
    {name: 'Joana', credit:300},
    {name: 'Vanessa', credit:200}
]

const findUser = users.findIndex ( user =>user.name === 'Vanessa')
console.log(findUser) */

/* CONCAT 

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3) */

/* JOIN

const elements = ['Fire', 'Air', 'Water'];

const myElements = elements.join ('-')

console.log(myElements)*/


/* INCLUDE 

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// true

console.log(pets.includes('at'));
// false */




