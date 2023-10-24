function executarExercicio17(){
    alert("17)Escreva um programa que verifique se um número é par ou ímpar e exiba a mensagem correspondente.")

    let valor = parseInt(prompt("Digite um valor"))

    let resposta = (valor%2==0)?alert(+ valor+" é par"):alert(+ valor+" é impar")
}