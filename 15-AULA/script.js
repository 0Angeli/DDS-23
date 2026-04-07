/*
console.log("VAMO Q VAMO")

//LAÇOS DE REPETIÇÃO

//FOR = PARA
//i = variável de controle
//i < 5 = duração do laço
//i++ = aumenta de 1 em 1
for(var i = 0; i < 5; i++){
    console.log("Estou aqui no laço")
}


console.log("Finalizei o loop")

//WHILE = ENQUANTO
var c = 1

while(c < 10){
    console.log("Oi, meu chapa")
    c++
}

console.log("Finalizei o loop de novo")

//ARRAY
var array = ["Neymar", 10, true, 5.0] 

//mostra todo o array
console.log(array)

//mostra
console.log(array[2])

array[2] = "Jogador"

*/

//COMENTEI TUDO DAQUI PARA CIMA

//Lista de times top (mais ou menos)

/*
var times = ["Brasil", "Real Madrid", "Gama", "Santos", "Paysandu"]

for(var i = 0; i < 2; i++){
    console.log("O time atual é:", times[i])

}
console.log("--------------")
//FOR ESPECIFICO DE ARRAY
//index - guarda o valor do indice
//in - usa o valor do indice pra mostrar o elemento
//times - define o array
//lenght - descobre o tamanho do array
console.log(times.length)
console.log("--------------")
//Faz a repetição até o fim do array
//indepedente do tamanho, com o .length
for(var i = 0; i < times.length; i++){
    console.log("O time atual é:", times[i])
}
console.log("--------------")
//FOR ESPECIFICO DE ARRAY
for(var index in times){
    console.log(times[index])
}
console.log("--------------")
for(var index of times){
    console.log(index)
}*/

//array inicial
var frutas = ["Maçã", "Pêra", "Banana"]

//mostra o array
console.log(frutas);

//PARA ADIÇÃO DE ELEMENTOS
//push() - adiciona no fim do array
frutas.push("Uva")
//mostra o array
console.log(frutas);

//unshift - adiciona no inicio do array
frutas.unshift("Laranja")
//mostra o array
console.log(frutas);

//PARA REMOÇÃO DE ELEMENTOS
//pop -remove o último elemento
var frutaTirada= frutas.pop()
console.log("Fruta removida:", frutaTirada);

//shift - remove o primeiro elemento
var exPrimeiraFruta = frutas.shift()
console.log("Ex primeira fruta:", exPrimeiraFruta);

//descobrir o index de um elemento
var index = frutas.indexOf("Pêra")
console.log("O index dele é:", index);

//descobrir se há um valor específico no array
console.log("Tem pitu?:", frutas.includes("Pitu"));
console.log("Tem maçã?:", frutas.includes("Maçã"));

// ordenar os elementos
frutas.sort()
console.log(frutas);

//Inverte a ordem dos elementos do array
frutas.reverse()
console.log(frutas);

//convertendo o array para string
//converte todo o array
console.log("Convertido:", frutas.join(" - "));

//SLICE - copia parte do array
//(de onde começa, quantos elementos estarão na cópia)
var copiaParte = frutas.slice(0,2)
console.log("Cópia:", copiaParte)

//SPLICE
//PARA REMOVER SÓ QU ALTERA TODO O ARRAY
//(de onde começa, quantos elementos serão tirados)
var removidos = frutas.splice(1,1)
console.log("Após remoção:", frutas)

//PARA ADICIONAR
//(de onde começa, quantos serão substituídos, valores)
frutas.splice(1,0, "Pitaya", "Melancia", "Morango")
console.log("Após adição:",frutas)

//(de onde começa quantos serão substituidos, valores)
frutas.splice(2,1,"Arroz")
console.log("Após substituição:", frutas)