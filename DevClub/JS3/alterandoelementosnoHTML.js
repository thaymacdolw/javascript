
/* Alterando o texto somente no html */
const element = document.querySelector(".texto")

element.textContent = "NOVO TEXTO"


console.log(element.textContent)// Só HTML
console.log(element.innerText)// LEVA EM CONTA O CSS
console.log(element.innerHTML)// TRÁS TUDO consegue trazer uma alteraçao e ainda enfiar HTML no meio (incluir tags)
