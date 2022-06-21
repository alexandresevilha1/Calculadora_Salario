import input from 'readline-sync'

let tabela_1 = [
    { ano: 2010, salario: 510, inflacao: 5.91},
    { ano: 2011, salario: 545, inflacao: 6.50},
    { ano: 2012, salario: 622, inflacao: 5.84},
    { ano: 2013, salario: 678, inflacao: 5.91},
    { ano: 2014, salario: 724, inflacao: 6.41},
    { ano: 2015, salario: 788, inflacao: 10.67},
    { ano: 2016, salario: 880, inflacao: 6.29},
    { ano: 2017, salario: 937, inflacao: 2.95},
    { ano: 2018, salario: 954, inflacao: 3.75},
    { ano: 2019, salario: 998, inflacao: 4.31},
    { ano: 2020, salario: 1045, inflacao: 4.52}
]



console.log("Escolha uma das alternativas: \n")

console.log("1 - Listar os salários minímos de 2010 à 2020")
console.log("2 - Listar o índice PICA de 2010 à 2020")
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n")

let opcao = input.question("Digite o numero da sua escolha: ")

opcao = Number(opcao)

switch(opcao) {

    case 1:
        for (let contador = 0; contador < tabela_1.length; contador++) {
            console.log("Ano:".padEnd(20,".")+tabela_1[contador].ano)
            console.log("Salário:".padEnd(20,".")+"R$ "+tabela_1[contador].salario+",00\n")
        }
        break;
    
    case 2:
        for (let contador = 0; contador < tabela_1.length; contador++) {
            console.log("Ano:".padEnd(20,".")+tabela_1[contador].ano)
            console.log("Inflação IPCA:".padEnd(20,".")+"R$ "+tabela_1[contador].inflacao+"%\n")
        }
        break;

    case 3:
        for (let contador = 0; contador < tabela_1.length; contador++) {

            let diferenca
            let crescimento
            let crescimentoFormatado

            if (contador > 0)  {
                diferenca = tabela_1[contador].salario - tabela_1[contador-1].salario;
                crescimento = (diferenca/tabela_1[contador-1].salario)*100;
                crescimentoFormatado = crescimento.toFixed(2);
            } else {
                crescimento = "-"
            }

            console.log("Ano:".padEnd(20,".")+tabela_1[contador].ano)
            console.log("Salário:".padEnd(20,".")+"R$ "+tabela_1[contador].salario+",00")
            console.log("Crescimento Salarial: ".padEnd(20,".")+crescimentoFormatado+"%")
            console.log("Inflação IPCA:".padEnd(20,".")+"R$ "+tabela_1[contador].inflacao+"%\n")
        }
        break;

    default:
        console.log("Escolha não valida")
        break;
    
}


