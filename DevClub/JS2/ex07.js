// A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; - O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!

const people = [{
    numberofChildren: 2,
    salary: 2000
},
{
    numberofChildren: 5,
    salary: 3000
},
{
    numberofChildren:0,
    salary: 2500
}, 
{
    numberofChildren: 2,
    salary:1000
},
{
    numberofChildren:3,
    salary:2300
},
{
    numberofChildren:1,
    salary:-200
},
]
    function findAverageAndHighestSalary(peopleInformation) {
        
        let averageSalary = 0
        let averageChildren = 0
        let highestSalary = 0

        for (let i = 0; i <= peopleInformation.length; i++) {

            const salary = peopleInformation[i].salary
            const children = peopleInformation[i].numberofChildren

            if (salary > highestSalary) highestSalary = salary

            if (salary < 0) {
                console.log (`Média de salário R$${(averageSalary/i).toFixed (0)}`)
                console.log (`Média de filhos ${(averageChildren/i).toFixed(0)}`)
                console.log (`Média Salarial é R$${highestSalary}`)
                break
            } else {
                averageSalary = averageSalary + salary;
                averageChildren += children
            }
        }
    }
    findAverageAndHighestSalary(people)