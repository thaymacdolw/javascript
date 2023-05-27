
/* No JS o HTML é chamado de "document", entao quando for chamar aqui noJS, sempre document.getElement...

document -> HTML

getElementByID -> trás UM elemento pelo ID
getElementByClassName -> trás TODOS os elementos com essa classe
getElementByTagName -> trás TODOS os elementos com essa TAG
getElementByName -> trás TODOS os elementos com esse NAME

querySelector -> trás UM elemento, o PRIMEIRO que encontrar
querySelectorALL -> trás TODOS os elementos que encontrar

*/


 /*EXEMPLOS 

getElementById : */

const input = document.getElementById("nomedaID") 
console.log (input)


 /* getElementByClassName : */

const elements = document.getElementByClassName ("nomedaclasse")
console.log (elements)

 /* getElementByTagName : */
 
const elements = document.getElementByTagName ("h1")
console.log (elements)


 /* getElementByName : */
 const elements = document.getElementByName ("nomedoName")
console.log (elements)


 /* querrySelector : */
 const elements = document.querrySelector ("nomedoelemento")
 console.log (elements)

 
 /* querrySelectorAll : */
 const elements = document.querrySelectorAll ("nomedoelemento")
 console.log (elements)


