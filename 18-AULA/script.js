// ARRAY
var barquinho =  ["Pedro",    "Tiago",    "João"]
var profissoes = ["Pescador", "Contador", "Carpinteiro"]

console.log("0", barquinho[0], " é ", profissoes[0]);

// OBJETO
// { chave : valor }

var cantor = {
    //chave : "Valor"
    nome: "Menos é Mais" ,
    generoMusical: "Pagode" ,
    estaVivo: true,
    idade: 10
}

//Printa o objeto todo
console.log(cantor);
 
//Printa uma chave do objeto
console.log(cantor.nome);
console.log(cantor.generoMusical);

// typeof(cantor)

//acessando propriedades
var intervalo = {
    horaInicio : "15h00" ,
    horaFim : "15h20" ,
    local: "Pátio" ,
    duracao: "20 min"
}

console.log("O intervalo inicia ás :", intervalo["horaInicio"]);

//Alterando um objeto

var garrafa = { }
console.log(garrafa);


//Adicionando novas propriedadeswq
garrafa.cor = "Azul"
garrafa.tamanho = "600 ml"
garrafa.preco = 8.5
garrafa["marca"] = "Suco Glub"
console.log(garrafa);

//Alterando valores, de propriedades já existentes
garrafa.cor = "Rosa"
garrafa["marca"] = "Topoué"

console.log(garrafa);

// OBJETOS
var animal = {
    //propriedades
    nome : "Tom" ,
    especie : "Garça" ,
    raca : "Adidas",

    //métodos
    falar : function(){
        console.log("SHAZAM");
    },
    andar : () =>{
        console.log("FUUUUUU")
        
    },
    dormir : () => {
        console.log("ZZZZZZZZZZZZ");        
    }
}

//mostrando um valor atrás da propriedade
console.log(animal.andar);

//mostrar o texto da função
console.log(animal.falar);

//executar a função
animal.falar()
