console.log("SIM")

//CALLBACK
//FUNÇÃO QUE SERÁ O CALLBACK
function finalizar(){
    console.log("Acabei");
}

//FUNÇÃO PRINCIPAL
function processar(callback){
    console.log("Iniciando o processamento das informações...");
    callback()
}

//Executo a função principal, atrelando ao callback
processar(finalizar)

//CALLBACK COM FUNÇÃO ANÔNIMA
function executarTarefa(callback){
    console.log("Inicindo a tarefa...")
    //executa uma funcao com delay
    setTimeout(callback, 3000)
}

executarTarefa(() => {
    console.log("Acabou a tarefa");
})

//CALLBACK COM CODIÇÃO SIMPLES
function verificarNota(nota, callback){
    if(nota >= 7){
    callback()
    }
}

function aprovado(){
    console.log("Congratulations, você é o milior")
}

verificarNota(8, aprovado)

//verificação com dois calbacks

//se deu certo
function loginCorreto(){
    console.log("Parabéns, logado com sucesso");
}

// se deu errado
function loginErrado(){
    console.log("Usiário ou senha errados");
}

function validarSenha(senha, sucesso, erro) {
    //Verificar a senha e se estiver correta chama o callback de sucesso
    if(senha == "1234"){
        sucesso()
    }

    //Se deu erro, chama o outro callback
    else{
        erro()
    }
}

//Executar os teste

console.log("--------------------------------")
//Senha errada
validarSenha("7", loginCorreto, loginErrado)


console.log("--------------------------------")
//Senha certa
validarSenha("1234", loginCorreto, loginErrado)