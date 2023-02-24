//Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const score = 10

switch (score) {
    case 1:
        console.log("Foi muito péssimo")
        break;
    case 2:
        console.log("Foi péssimo")
        break;
    case 3:
        console.log("Foi muito ruim")
        break;
    case 4:
        console.log("Foi ruim")
        break;
    case 5:
        console.log("Foi bem mais ou menos")
        break;
    case 6:
        console.log("Foi mais ou menos")
        break;
    case 7:
        console.log("Foi bom")
        break;
    case 8:
        console.log("Foi muito bom")
        break;
    case 9:
        console.log("Foi ótimo")
        break;
    case 10:
        console.log("Foi excelente")
        break;

    default:
        console.log("Nota não encontrada")
        break;
}
