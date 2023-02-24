// Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.

const person= {
    nome: "Thayna",
    idade: 26,
    sexo:"Female",
    profissão: "Developer",
    nacionalidade:"Brasileira" 
}

if (person.idade >= 18 && (person.nacionalidade === "Brasileiro" || person.nacionalidade === "Brasileira")) {
    console.log("Passou no processo")
} else {
    console.log ("Reprovou no processo")
}