console.log("Ola Mundo")
console.log(35.7 * 3.8)
console.log((32 - 3) / 4.5)
console.log(355 - 22.7)
console.log(127.75 + 53.82)
console.log((4 + 4 + 4 + 4) / 4)
console.log(99 + 21 + 125)
console.log(100 / 2)
console.log(30 + 1)
console.log(10 * 2)

//variaveis
/* variavel é um espaço guardado na memoria para armazenar um valor, toda variavel tem um nome.
e toda variavel tem um tipo
-A varivel precisa ter um nome significativo, exemplo:
 -uma variavel que vai armazenar a informação idade pode ter o nome idade, uma variavel que vai armazenar o preo de venda de um produto pode ter o precovenda
- a recmendação é que o nome da variaavel seja simples e significativo, sem caracteres especiais, sem acento, sem espaço e lembrando que o javascript diferencia maiusculas de minusculas, isso significa que PrecoVenda é diferente de precovenda*/
let nome = 'Erich'
let idade = 23
let nota1 = 7.5
let fumante = false

console.log(nome)
console.log(idade, nota1, fumante)
console.log('Sua nota é ' + nota1)
console.log(typeof nome) //Erich é uma string
console.log(typeof idade) //Idade é um numero
console.log(typeof fumante) //fumante é boolean (ou é verdadeiro ou falso)
let veiculos = ['carro' , 'moto' , 'aviâo']
console.log(veiculos)
console.log(typeof veiculos)

//tipos de variaveis

let cliente = {
    nome: 'Erich',
    idade: 23
}
console.log(cliente)
console.log(typeof cliente)

let salvar = function ( ){

}
console.log(typeof salvar)

// OPERADOS RELACIONAIS
console.log(10>3) //maior
console.log(5<3) //menor
console.log(15>=10) // maior ou igual
console.log(15<=10) //menor ou igual
console.log(10 == 10) //igual
console.log(10!= 10) //diferente

//Operadores Logicos
console.log('===========')
console.log(10>3 && 10>15 ) //Operador E  - com o operador E (and) todas expressões devem ser verdadeira para o resultado ser verdadeiro

console.log(10>3 || 10>5 || 10>8) //U I Operador OU(OR) - com o operador OU apenas uma expressão precisa ser verdadeira para o resultado ser verdadeiro

console.log(!10>3) // Operador NÃO(NOT) - o operador NOT inverte o resultado da expressao, se fr verdadeiro ele inverte para falso e se for falso ele inverte para verdadeiro
