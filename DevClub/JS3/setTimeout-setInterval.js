/*
 setTimeout -> Executa uma vez
 setInterval -> Executa infinitas vezes

 tempo sempre dado em milissegundos
 clearinterval -> vai pausar o setInterval
 */

 setTimeout(() => {
// Executa o que estiver aqui 
 }, timeout); //arrow function =>

 setTimeout(function() {
// Executa o que estiver aqui 
 alert("Executei")
 }, 1000); //escrever function  
 // 1000 ms = 1 s

 function myFunction(){
// Executa o que estiver aqui 
 }

 setTimeout (myFunction, timeout); // ou fazer uma funçao separada e depois chamar ela

////////

let number = 0

 setInterval(() => {
 console.log(number++)
 }, 1000);