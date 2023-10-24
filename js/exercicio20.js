function executarExercicio20(){
    alert("20)Crie um programa que leia um número inteiro e exiba se ele é positivo, negativo ou zero.")

    let numero = parseInt(prompt("Digite um numero"))

    let resposta = (numero>0)?alert("POSITIVO"):(numero<0)?alert("NEGATIVO"):alert("ZERO")
}