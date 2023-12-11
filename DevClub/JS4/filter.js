/* FILTER
- Cria um novo array,. a partir do array percorrido(array original)
-Cria um novo array APENAS com elementos filtrados
-Aceita 3 parâmetros
    -item do array (OBRIGATÓRIO)
    -index (OPCIONAL)
    -array completo (OPCIONAL)

    return true -> item atual passa pro novo array
    return false -> item atual NÃO passa pro novo array 
*/


const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = list.filter( number=> {
    return number % 2 === 0
} )

console.log(newList)