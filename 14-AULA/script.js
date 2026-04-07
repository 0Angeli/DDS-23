/*
//MOSTRANDO UMA MENSAGEM NO CONSOLE
console.log("Salve rapaziadinha do canal, se inscreve aí")

// CAIXA DE ALERTA
alert("TESTE PARA VER SE FUNCIONA")

// CRIANDO VARIÁVEIS
var nome = "Cristiano"  //String ou cadeia
var numero = 7          //Int ou inteiro
var salto = 2.10        //Float ou real
var theBest = true      //boolean ou logico

//FUNçÂO QUE MOSTRA O TIPO DA VARIÁVEL
console.logtypeof((nome))

console.log("Seu nome é:" + nome)
console.log("Seu número é:", numero)
console.log("Seu pulo é:", salto)
console.log("É o milior? = ", theBest)

nome= 10
console.log(typeof(nome))


// OUTROS TIPOS DE VARIÁVEIS
var nulo = null
var indefinido = undefined
console.log(nulo)
console.log(indefinido)
*/

//OPERADORES ARITIMETICOS

/*
var a = 10 , b = 5

console.log("Soma:", a + b)
console.log("Subtração:", a - b)
console.log("Multiplicalçao:", a * b)
console.log("Divisão:", a / b)
console.log("Módulo:", a % b)

//OPERADORES LÒGICOS
//E, OU, NÃO
//&&, ||, !

var verdade = true, mentira = false
console.log(verdade && mentira)
console.log(verdade || mentira)
console.log(verdade && !mentira)

//OPERADORES RELACIONAIS
//>, <, >=, <=, ==, !=, ===, !==

var x = 65, y = 32, z = "65"

console.log(x > y) 
console.log(x < y)
console.log(x > y)
console.log(x >= y)
console.log(x <= y)
console.log(x == y)
console.log(x != y)
//Verificando valor e tipo
console.log(x === z)
console.log(x !== y)
*/

//COMENTEI TODA A PARTE D EOPERADORES

//DESVIOS CONDICIONAIS

//SE = IF

/*
var estaVivo = true

//PRIMEIRA COMPARAÇÃO
if(estaVivo == true){
    console.log("P arabéns, você está vivo")
}

//SEGUNDA COMPARAÇÂO
else if(estaVivo == undefined){
    console.log("Você não está vido nem morto")
}

//ENTRA AQUI, CASO TODAS AS OUTRAS COMPARAÇÕES DEREM FALSO
else{
    console.log("Infelizmente, você foi de F")
}

//SWITCH = ESCOLHA
var camisa = "Azul"

switch(camisa){
    case "Azul":
        console.log("Você ganhou um voucher")
        break
        case "Branco":
            console.log("Você ganhou um body splash da Virginia")
        break
        case "Vermelho":
            console.log("Você ganhou uma Ferrari 3 portas")
        break
        default:
            console.log("Camisa invalida e feia, vá trocar")
        break
}
*/

//COMENTEI TODA PARTE DE DESVIOS

//PROMPT - INTERAGE COM O USUÁRIO E COLETA UM VALOR
var nome = prompt("Digite seu nome: ")
var time = prompt("Me diga, para que time você torce")

console.log("Seu nome é:", nome)
console.log("Seu time é:", time)