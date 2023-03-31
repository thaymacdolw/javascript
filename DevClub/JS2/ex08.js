// Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.

function calculate (valorInicial, valorAtual, tempo) {
    const juros = (valorAtual-valorInicial)/(valorInicial*tempo)
    console.log ((juros*100).toFixed(2) +'%')
}
calculate(1000,1200,10)