const prompt = require('prompt-sync')({sigint: true})
const crud = require('./crud.js')
/*
Faça um script de javascript que gerencia (CRUD) as atividades que o usuário fez nas férias, 
o usuário informa o dia e as atividades que ele realizou no realizou no dia (pode ser mais de uma atividade por dia).

Utilize todos os conceitos abaixo:

Variáveis
Array
Objeto
Condicionais (utilize tando switch, como if else)
Laços de repetição (utilize forEach)
Entrada e Saída
Funções (Utilize function, arrow function e função anônima)
Módulos (Toda a lógica referente às funções de CRUD e o armazenamento deve estar em um módulo separado do arquivo principal)
Git/Github (Crie um repositório publico, e envie nesta atividade o link)
NPM (Utilize o pacote prompt-sync para interagir com usuário)
*/
let ferias = [
    {dia: 15, feitos:['trabalhei das 6:30 até as 15:20','Cheguei em casa as 16:20','Fiquei assistindo animes com minha esposa.']},
    {dia: 16, feitos:['trabalhei das 6:30 até as 15:20','estudei pelo site do BeeCronwd']}
]




while (true) {
    console.clear()
    console.log(`
1. adicionar uma atividade  diaria
2.  leitura  das atividades diarias
3.  alterar  uma adividade  diaria
4.  remover  uma adividade  diaria

0. SAIR DO PROGRAMA
`);
    let op = prompt('Digite uma das opções: ')
    switch (op) {
        case '1':
            crud.add(ferias)
            break;
        case '2':
            crud.read(ferias, true)
            break;
        case '3':
            crud.update(ferias, false)
            break;
        case '4':
            crud.remove(ferias, false)
            break;
        case '0':
            process.exit();
            break;
        default:
            prompt('Opção invalida. Enter para continuar')
            break;
    }
}