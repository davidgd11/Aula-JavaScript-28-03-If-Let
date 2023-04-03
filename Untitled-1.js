/*
// substituir texto 
let texto = "Estão chegando as provas"
console.log(texto.replace("provas", "avaliações"))

document.write("<br>")

//fixar um valor
let num = 223.45555
console.log(num.toFixed(2))


//caixa alert
alert("Olá meu amigo")


//caixa de confirmação
let teste = confirm("Voce é um aluno?")
console.log(teste)

//caixa de prompt
let texto1 = prompt ("Digite seu nome")
console.log("O nome dele é: " , texto1)
document.write("O nome dele é: ", texto1)
*/

//if
if (20 > 10){
    document.write("O valor é menor que 20")
    document.write("<br></br>")
}

//if else
if (25 > 15){
    document.write("Número maior")
    document.write("<br></br>")

}else {
    document.write("Número menor")
    document.write("<br></br>")
}

//if else declarando variavel
let numero = 10 
if(numero > 10){
    document.write("O numero é maior")
    document.write("<br></br>")

}else{
    document.write("O numero é menor")
    document.write("<br></br>")
}


let idade = prompt("Digite sua idade")
if (idade <= 12){
    document.write("É uma criança")
    document.write("<br></br>")


}else if (idade <= 17){
    document.write("Ele é um adolescente")
    document.write("<br></br>")


}else if (idade <= 30){
    document.write("Ele é um jovem adulto")
    document.write("<br></br>")


}else if (idade <= 60){
    document.write("Um adulto experiente")
    document.write("<br></br>")


}else {
    document.write("É um idoso")
    document.write("<br></br>")
}

//&& means "e" || means "ou"


let idade_per = prompt ("Quantos anos voce tem? ")
if (idade_per <= 17){
    document.write("Não está permitida a entrada, apenas maiores de 18 anos!")
}else{
    document.write("Pode entrar!")
}