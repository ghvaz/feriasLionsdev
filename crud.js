const prompt = require('prompt-sync')({sigint: true})

var CRUD = {
    pesquisa: function(array, qual){
        let onde = -1
        array.forEach((element,index) => {
            if(qual == element.dia){
                onde = index
            }
        });
        return onde
    },

    adicionarFeito: function(array, bool, dia){
        let feito = ''
        if(bool){
            feito = prompt(`O que fez a mais no dia ${dia}:`)
            feito = feito.trim().toLocaleLowerCase().toString()
            if(feito == 'acabou'){
                
                return false;
            }else{
                array[this.pesquisa(array, dia)].feitos.push(feito)

                return true;
            }
        }else{
            feito = prompt(`O que fez no dia ${dia}:`)
            array.push({dia, feito});
            
            return true;
        }
    },

    add: function(array){
        console.clear()
        let dia = Number(prompt('Qual dia quer adicionar:'))
        if(dia > 14 && dia < 20){
            
            if (this.pesquisa(array, dia) >= 0) {
                console.log("Dia já cadastrado, adicione mais informações\nOu 'ACABOU' para acabar o dia.");
                let op
                do {
                    op = this.adicionarFeito(array, true, dia)
                } while (op); 
            }else{
                this.adicionarFeito(array, false, dia)
            }
            return;
        }else{
            let op = prompt(`Dia informado não esta no intervalo ( entre os dia 15 e 19 )\nEnter para continuar.\nOu sair para retornar o menu.`);
            op = op.toLocaleLowerCase().toString().trim()
            if(op !== 'sair'){
                CRUD.add(array)
            }
            
        }
    },
    read: function (array, read) {
        console.clear()
        array.forEach(element => {
            console.log(`------------------------------------------------------------------
            Dia: ${element.dia}:
    Feitos:\n`);
        element.feitos.forEach((elmt, i) => {
            console.log((i+1)+". "+elmt)
        });
        });
        console.log("\n");

        if(read){
            prompt("Enter para sair.")
        }
    },
    update: function(array, bool){
        CRUD.read(array, bool)
        let qual = +prompt('Qual dia quer alterar os feitos:')
        let index = CRUD.pesquisa(array,qual )
        if(index >= 0){
            console.log(array[index].feitos+"\n------------------------------------------------------------------\nAlterando");
            array[index].feitos = prompt('altere os feitos:')
            prompt("Alterado com sucesso.")
        }else{
            console.log(`Dia não encontrado.`);
            let op = prompt("Enter para tentar novamente ou sair para voltar ao menu.")
            op = op.toString().trim().toLocaleLowerCase()
            if(op !== 'sair'){
                CRUD.update(array, bool)
            }
        }
    },
    remove: function(array, bool){
        CRUD.read(array, bool)
        let qual =  prompt("Qual dia quer excluir: ")
        let index = CRUD.pesquisa(array, qual)

        if(index >=0){
            array.slpice(index, 1)
            prompt('Deletado com sucesso. Enter para retornar ao menu')
        }else{
            console.log(`Dia não encontrado.`);
            let op = prompt("Enter para tentar novamente ou sair para voltar ao menu.")
            op = op.toString().trim().toLocaleLowerCase()
            if(op !== 'sair'){
                CRUD.update(array, bool)
            }
        }
    }
}


module.exports = CRUD
